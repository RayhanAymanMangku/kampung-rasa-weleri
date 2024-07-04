const knexConfig =
  require("../../knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(knexConfig);

async function getCustomerID(kontakCustomer, namaCustomer, trx) {
  try {
    const customer = await trx("customer")
      .select("idCustomer")
      .where({
        kontakCustomer: kontakCustomer,
        namaCustomer: namaCustomer,
      })
      .first();

    if (customer) {
      console.log("Existing customer found:", customer.idCustomer); // Logging existing customer
      return customer.idCustomer;
    } else {
      const [newCustomer] = await trx("customer").insert(
        { namaCustomer, kontakCustomer },
        ["idCustomer"]
      );
      console.log("New customer created:", newCustomer.idCustomer); // Logging new customer
      return newCustomer.idCustomer;
    }
  } catch (error) {
    console.error("Error in getCustomerID:", error);
    throw error;
  }
}

function getDataOrders() {
  return knex("pesanan")
    .join("customer", "pesanan.idCustomer", "customer.idCustomer")
    .select(
      "pesanan.idPesanan",
      "customer.namaCustomer",
      "customer.kontakCustomer",
      "pesanan.totalPrice"
    );
}

async function getOrderDetailsByPesanan(idPesanan) {
  try {
    const result = await knex("detailPesanan")
      .join("pesanan", "detailPesanan.idPesanan", "pesanan.idPesanan")
      .join("menu", "detailPesanan.idMenu", "menu.idMenu")
      .select(
        "detailPesanan.idDetailPesanan",
        "detailPesanan.idMenu",
        "detailPesanan.quantity",
        "menu.namaMenu",
        "pesanan.totalPrice"
      )
      .where("detailPesanan.idPesanan", idPesanan);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function createOrder(
  namaCustomer,
  kontakCustomer,
  waktuPesanan,
  totalPrice,
  orderDetails
) {
  return knex
    .transaction(async (trx) => {
      const idCustomer = await getCustomerID(kontakCustomer, namaCustomer, trx);
      console.log("idCustomer after getCustomerID:", idCustomer); // Logging idCustomer

      const [order] = await trx("pesanan").insert(
        { idCustomer, waktuPesanan: new Date(waktuPesanan), totalPrice },
        ["idPesanan"]
      );

      const detailEntries = orderDetails.map((detail) => ({
        idPesanan: order.idPesanan,
        idMenu: detail.idMenu,
        quantity: detail.quantity,
      }));

      await trx("detailPesanan").insert(detailEntries);

      return { idPesanan: order.idPesanan };
    })
    .catch((error) => {
      console.error("Error in createOrder transaction:", error); // Logging error in transaction
      throw error;
    });
}

function deleteOrder(idPesanan) {
  return knex.transaction(async (trx) => {
    const deletedDetails = await trx("detailPesanan")
      .where("idPesanan", idPesanan)
      .del();
    if (deletedDetails === 0) {
      throw new Error("Detail pesanan not found");
    }

    const deletedOrder = await trx("pesanan")
      .where("idPesanan", idPesanan)
      .del();
    if (deletedOrder === 0) {
      throw new Error("Order not found");
    }

    return { message: "Order deleted successfully" };
  });
}

module.exports = {
  createOrder,
  deleteOrder,
  getDataOrders,
  getOrderDetailsByPesanan,
};
