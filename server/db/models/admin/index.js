const knexConfig =
  require("../../knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(knexConfig);

const getStaff = () => {
  return knex.select("*").from("staf");
};

const deleteStaffById = (id) => {
  return knex("staf").where("id_staf", id).del();
};

module.exports = {
  getStaff,
  deleteStaffById,
};
