const PaymentModel = require("../../models/payment");

const createTransaction = async (req, res) => {
  const { idPesanan, grossAmount, customerDetails } = req.body;

  console.log("Received request:", req.body);

  try {
    const transaction = await PaymentModel.createTransaction(
      idPesanan,
      grossAmount,
      customerDetails
    );
    console.log("Transaction created:", transaction);
    res.status(200).json(transaction);
  } catch (error) {
    console.error("Error creating transaction:", error.message); // Log error
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTransaction,
};
