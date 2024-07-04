const knexConfig =
  require("../../knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(knexConfig);

const getMenuData = () => {
  return knex.select("*").from("menu");
};

module.exports = { getMenuData };
