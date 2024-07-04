const knexConfig =
  require("../../../knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(knexConfig);

async function getMonthlyCombinedData(year) {
  const orders = await knex("orders")
    .select(knex.raw('EXTRACT(MONTH FROM "created_at") as month'))
    .count("idOrder as orderCount")
    .whereRaw('EXTRACT(YEAR FROM "created_at") = ?', [year])
    .groupByRaw('EXTRACT(MONTH FROM "created_at")')
    .orderByRaw('EXTRACT(MONTH FROM "created_at")');

  const pesanan = await knex("pesanan")
    .select(knex.raw('EXTRACT(MONTH FROM "waktuPesanan") as month'))
    .count("idPesanan as pesananCount")
    .whereRaw('EXTRACT(YEAR FROM "waktuPesanan") = ?', [year])
    .groupByRaw('EXTRACT(MONTH FROM "waktuPesanan")')
    .orderByRaw('EXTRACT(MONTH FROM "waktuPesanan")');

  const combinedData = Array(12)
    .fill(0)
    .map((_, index) => ({
      month: index + 1,
      total: 0,
    }));

  orders.forEach((order) => {
    combinedData[order.month - 1].total += parseInt(order.orderCount, 10);
  });

  pesanan.forEach((pesanan) => {
    combinedData[pesanan.month - 1].total += parseInt(pesanan.pesananCount, 10);
  });

  return combinedData;
}

module.exports = {
  getMonthlyCombinedData,
};
