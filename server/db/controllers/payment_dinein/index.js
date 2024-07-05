const PaymentDineInModel = require("../../models/payment_dinein");

const createTransaction = async (req, res) => {
  const { idOrder, grossAmount, customerDetails } = req.body;

  if (!idOrder) {
    return res.status(400).json({ message: "idOrder is required" });
  }

  console.log("Received request:", req.body);

  try {
    console.log("Passing to model:", idOrder, grossAmount, customerDetails);
    const transaction = await PaymentDineInModel.createTransaction(
      idOrder,
      grossAmount,
      customerDetails
    );
    console.log("Transaction created:", transaction);
    res.status(200).json(transaction);
  } catch (error) {
    console.error("Error creating transaction:", error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTransaction,
};
