const knexConfig =
  require("../../knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(knexConfig);

function getMenus() {
  return knex("menu").select();
}

function getMenuById(idMenu) {
  return knex("menu").where({ idMenu }).first();
}

function createMenu(menu) {
  return knex("menu").insert(menu);
}

function deleteMenu(idMenu) {
  return knex("menu").where({ idMenu }).del();
}

module.exports = {
  getMenus,
  getMenuById,
  createMenu,
  deleteMenu,
};
