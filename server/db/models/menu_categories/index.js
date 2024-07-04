const knexConfig =
  require("../../knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(knexConfig);

function getKategoriMenu() {
  return knex("kategori_menu").select();
}

module.exports = {
  getKategoriMenu,
};
