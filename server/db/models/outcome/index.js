const knexConfig =
  require("../../knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(knexConfig);

const createOutcome = async (data) => {
  return knex("pengeluaran").insert(data);
};

const getTotalOutcome = async () => {
  return knex("pengeluaran")
    .sum("jumlahPengeluaran as totalPengeluaran")
    .first();
};

const getAllOutcomes = async () => {
  return knex("pengeluaran").select(
    "idPengeluaran",
    "namaPengeluaran",
    "jumlahPengeluaran",
    "tanggalPengeluaran",
    "keterangan"
  );
};

const deleteOutcome = async (id) => {
  return knex("pengeluaran").where("idPengeluaran", id).del();
};

module.exports = {
  createOutcome,
  getTotalOutcome,
  getAllOutcomes,
  deleteOutcome,
};
