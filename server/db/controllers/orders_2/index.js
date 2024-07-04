const orders2Model = require("../../models/orders_2");
const customerModel = require("../../models/customer");

async function getDineInOrders(req, res) {
  try {
    const orders = await orders2Model.getAllDineInOrders();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getDineInOrderById(req, res) {
  const idPesanan = req.params.idPesanan;
  console.log("idPesanan:", idPesanan); // Debugging log to confirm parameter value
  try {
    const orders = await orders2Model.getDineInOrderById(idPesanan);
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createDineInOrder(req, res) {
  const {
    namaCustomer,
    kontakCustomer,
    selectedTable,
    waktuPesanan,
    totalPrice,
    orderDetails,
  } = req.body;

  if (
    !selectedTable ||
    !namaCustomer ||
    !kontakCustomer ||
    !waktuPesanan ||
    !totalPrice ||
    !orderDetails
  ) {
    return res.status(400).json({ error: "Data pesanan tidak lengkap." });
  }

  try {
    const newCustomer = await customerModel.addCustomer(
      namaCustomer,
      kontakCustomer
    ); // Always create a new customer
    const idCustomer = newCustomer.idCustomer; // Ensure correct extraction
    const result = await orders2Model.createDineInOrder(
      idCustomer,
      selectedTable,
      waktuPesanan,
      totalPrice,
      orderDetails
    );
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getOrderDetailsByPesanan(req, res) {
  const idPesanan = req.params.idPesanan;
  try {
    const result = await ordersModel.getOrderDetailsByPesanan(idPesanan);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getDineInOrders,
  createDineInOrder,
  getOrderDetailsByPesanan,
  getDineInOrderById,
};
