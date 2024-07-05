const ordersModel = require("../../models/orders");

async function getOrderDetailsByPesanan(req, res) {
  const idPesanan = req.params.idPesanan;
  try {
    const result = await ordersModel.getOrderDetailsByPesanan(idPesanan);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getDataOrders(req, res) {
  try {
    const result = await ordersModel.getDataOrders();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createOrder(req, res) {
  const {
    namaCustomer,
    kontakCustomer,
    waktuPesanan,
    totalPrice,
    orderDetails,
  } = req.body;

  console.log("Received data:", {
    namaCustomer,
    kontakCustomer,
    waktuPesanan,
    totalPrice,
    orderDetails,
  }); // Logging received data

  try {
    const result = await ordersModel.createOrder(
      namaCustomer,
      kontakCustomer,
      waktuPesanan,
      totalPrice,
      orderDetails
    );
    console.log("Order created with idPesanan:", result.idPesanan); // Logging result
    res.status(201).json(result);
  } catch (error) {
    console.error("Error in createOrder controller:", error); // Logging error in controller
    res.status(500).json({ error: error.message });
  }
}

async function deleteOrder(req, res) {
  const idPesanan = req.params.id;
  try {
    const result = await ordersModel.deleteOrder(idPesanan);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateOrderStatus(req, res) {
  const idPesanan = req.params.id;
  const { status } = req.body;

  try {
    const result = await ordersModel.updateOrderStatus(idPesanan, status);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getOrderDetailsByPesanan,
  createOrder,
  deleteOrder,
  getDataOrders,
  updateOrderStatus,
};
