const dotenv = require("dotenv");
const midtransClient = require("midtrans-client");

dotenv.config();

const snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY,
});

const createTransaction = async (idPesanan, grossAmount, customerDetails) => {
  const parameter = {
    transaction_details: {
      order_id: idPesanan,
      gross_amount: grossAmount,
    },
    customer_details: customerDetails,
  };

  console.log("Transaction parameters:", parameter);

  try {
    const transaction = await snap.createTransaction(parameter);
    console.log("Midtrans response:", transaction);
    return transaction;
  } catch (error) {
    console.error("Midtrans error:", error.message);
    throw new Error(error.message);
  }
};

module.exports = {
  createTransaction,
};
