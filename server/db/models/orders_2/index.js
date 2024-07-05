const knexConfig =
  require("../../knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(knexConfig);

async function getCustomerID(namaCustomer, kontakCustomer) {
  const customer = await knex("customer")
    .select("idCustomer")
    .where({ namaCustomer, kontakCustomer })
    .first();

  if (customer) {
    return customer.idCustomer;
  } else {
    const [newCustomer] = await knex("customer").insert(
      { namaCustomer, kontakCustomer },
      ["idCustomer"]
    );
    return newCustomer.idCustomer;
  }
}

async function createDineInOrder(
  idCustomer,
  idTable,
  waktuPesanan,
  totalPrice,
  orderDetails
) {
  return knex.transaction(async (trx) => {
    const [order] = await trx("orders").insert(
      { idCustomer, idTable, waktuPesanan, totalPrice },
      ["idOrder"]
    );

    const orderDetailsData = orderDetails.map((detail) => ({
      idOrder: order.idOrder,
      idMenu: detail.idMenu,
      quantity: detail.quantity,
      namaMenu: detail.namaMenu,
    }));

    await trx("orderDetails").insert(orderDetailsData);

    return { idOrder: order.idOrder };
  });
}

async function getDineInOrders(req, res) {
  try {
    const orders = await orders2Model.getAllDineInOrders();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getAllDineInOrders() {
  const orders = await knex("orders")
    .join("customer", "orders.idCustomer", "customer.idCustomer")
    .join("tables", "orders.idTable", "tables.idTable")
    .select(
      "orders.idOrder",
      "customer.namaCustomer",
      "customer.kontakCustomer",
      "tables.idTable",
      "orders.idCustomer"
    );

  for (let order of orders) {
    const details = await knex("orderDetails")
      .join("menu", "orderDetails.idMenu", "menu.idMenu")
      .join("orders", "orderDetails.idOrder", "orders.idOrder")
      .select(
        "menu.namaMenu",
        "orderDetails.quantity",
        "orderDetails.idMenu",
        "orders.waktuPesanan",
        "orders.totalPrice"
      )
      .where("orderDetails.idOrder", order.idOrder);

    order.details = details;
  }

  return orders;
}

async function getDineInOrderById(idPesanan) {
  console.log("Fetching orders with idPesanan:", idPesanan);

  const orders = await knex("orders")
    .join("customer", "orders.idCustomer", "customer.idCustomer")
    .join("tables", "orders.idTable", "tables.idTable")
    .select(
      "orders.idOrder",
      "customer.namaCustomer",
      "customer.kontakCustomer",
      "tables.idTable",
      "orders.idCustomer",
      "orders.totalPrice"
    )
    .where("orders.idOrder", idPesanan);

  for (let order of orders) {
    const details = await knex("orderDetails")
      .join("menu", "orderDetails.idMenu", "menu.idMenu")
      .select("menu.namaMenu", "orderDetails.quantity", "orderDetails.idMenu")
      .where("orderDetails.idOrder", order.idOrder);

    order.details = details;
  }

  return orders;
}

module.exports = {
  getAllDineInOrders,
  getDineInOrders,
  createDineInOrder,
  getCustomerID,
  getDineInOrderById,
};
