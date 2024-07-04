const knexConfig =
  require("../../knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(knexConfig);

function getMenus() {
  return knex("menu").select();
}

function getMenuById(idMenu) {
  return knex("menu").where({ idMenu }).first();
}

module.exports = {
  getMenus,
  getMenuById,
};
