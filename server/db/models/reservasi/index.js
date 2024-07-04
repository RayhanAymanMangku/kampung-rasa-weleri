const knexConfig =
  require("../../knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(knexConfig);

const Reservasi = {
  getAll() {
    return knex("reservasi").select("*");
  },

  getById(id) {
    return knex("reservasi").where("idReservasi", id).first();
  },

  create(newReservasi) {
    return knex("reservasi").insert(newReservasi).returning("*");
  },

  delete(id) {
    return knex("reservasi").where("idReservasi", id).del();
  },
};

module.exports = Reservasi;
