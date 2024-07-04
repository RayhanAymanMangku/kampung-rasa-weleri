// const knexConfig =
//   require("../../knexfile")[process.env.NODE_ENV || "development"];
// const knex = require("knex")(knexConfig);

// function getCustomers() {
//   return knex("customer").select();
// }

// function getCustomerById(idCustomer) {
//   return knex("customer").where({ idCustomer }).first();
// }

// function addCustomer(namaCustomer, kontakCustomer) {
//   return knex("customer")
//     .insert({ namaCustomer, kontakCustomer })
//     .returning("*");
// }

// function deleteCustomer(idCustomer) {
//   return knex("customer").where({ idCustomer }).del().returning("*");
// }

// module.exports = {
//   getCustomers,
//   getCustomerById,
//   addCustomer,
//   deleteCustomer,
// };

const knexConfig =
  require("../../knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(knexConfig);

async function addCustomer(namaCustomer, kontakCustomer) {
  const [newCustomer] = await knex("customer").insert(
    { namaCustomer, kontakCustomer },
    ["idCustomer"]
  );
  return newCustomer; // Ensure this returns { idCustomer: ... }
}

async function getCustomers() {
  return knex("customer").select();
}

async function getCustomerById(idCustomer) {
  return knex("customer").where({ idCustomer }).first();
}

async function deleteCustomer(idCustomer) {
  return knex("customer").where({ idCustomer }).del();
}

module.exports = {
  addCustomer,
  getCustomers,
  deleteCustomer,
  getCustomerById,
};
