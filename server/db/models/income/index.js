const knexConfig =
  require("../../knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(knexConfig);

async function calculateIncome() {
  const dineInTotal = await knex("orders").sum("totalPrice as total").first();

  const takeawayTotal = await knex("pesanan")
    .sum("totalPrice as total")
    .first();

  const totalIncome = (dineInTotal.total || 0) + (takeawayTotal.total || 0);

  const totalExpenses = await knex("pengeluaran")
    .sum("jumlahPengeluaran as total")
    .first();

  return {
    totalIncome,
    totalExpenses: totalExpenses.total || 0,
    netIncome: totalIncome - (totalExpenses.total || 0),
  };
}

module.exports = {
  calculateIncome,
};
