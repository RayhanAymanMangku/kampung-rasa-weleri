const knexConfig =
  require("../../knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(knexConfig);
const loginModel = {
  getUserByUsername: (username) => {
    return knex("staf").where({ username }).first();
  },
};

module.exports = loginModel;
