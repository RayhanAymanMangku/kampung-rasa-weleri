const knexConfig =
  require("../../../knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(knexConfig);

async function getYearlyTotalIncome(year) {
  // Fetch total income from the 'orders' table
  const ordersTotalIncome = await knex("orders")
    .select(knex.raw('EXTRACT(MONTH FROM "waktuPesanan") as month'))
    .sum("totalPrice as total")
    .whereRaw('EXTRACT(YEAR FROM "waktuPesanan") = ?', [year])
    .groupByRaw('EXTRACT(MONTH FROM "waktuPesanan")');

  // Fetch total income from the 'pesanan' table
  const pesananTotalIncome = await knex("pesanan")
    .select(knex.raw('EXTRACT(MONTH FROM "waktuPesanan") as month'))
    .sum("totalPrice as total")
    .whereRaw('EXTRACT(YEAR FROM "waktuPesanan") = ?', [year])
    .groupByRaw('EXTRACT(MONTH FROM "waktuPesanan")');

  // Combine and sum up the income for each month
  const combinedIncome = {};

  ordersTotalIncome.forEach((item) => {
    const month = item.month;
    if (!combinedIncome[month]) {
      combinedIncome[month] = 0;
    }
    combinedIncome[month] += parseFloat(item.total);
  });

  pesananTotalIncome.forEach((item) => {
    const month = item.month;
    if (!combinedIncome[month]) {
      combinedIncome[month] = 0;
    }
    combinedIncome[month] += parseFloat(item.total);
  });

  const incomeByMonth = new Array(12).fill(0).map((_, index) => {
    const month = index + 1;
    return {
      month: month,
      totalIncome: combinedIncome[month] || 0,
    };
  });

  console.log("Income by month for", year, ":", incomeByMonth);
  return incomeByMonth.filter((month) => month.totalIncome > 0); // Filter out months with 0 income
}

module.exports = {
  getYearlyTotalIncome,
};
