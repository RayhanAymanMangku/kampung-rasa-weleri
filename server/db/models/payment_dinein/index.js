const dotenv = require("dotenv");
const midtransClient = require("midtrans-client");

dotenv.config();

const snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY,
});

const createTransaction = async (idOrder, grossAmount, customerDetails) => {
  console.log("Model received idOrder:", idOrder);
  console.log("Model received grossAmount:", grossAmount);
  console.log("Model received customerDetails:", customerDetails);

  const parameter = {
    transaction_details: {
      order_id: idOrder.toString(),
      gross_amount: grossAmount,
    },
    customer_details: customerDetails,
  };

  console.log("Transaction parameters:", parameter);

  if (
    !parameter.transaction_details.order_id ||
    !parameter.transaction_details.gross_amount
  ) {
    console.error("Error: order_id or gross_amount is not defined.");
    throw new Error("order_id and gross_amount must be defined");
  }

  try {
    const transaction = await snap.createTransaction(parameter);
    console.log("Midtrans response:", transaction); // Log Midtrans response
    return transaction;
  } catch (error) {
    console.error("Midtrans error:", error.message); // Log Midtrans error
    throw new Error(error.message);
  }
};

module.exports = {
  createTransaction,
};
