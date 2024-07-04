exports.up = function (knex) {
  return knex.schema.createTable("customer", function (table) {
    table.increments("idCustomer").primary();
    table.text("namaCustomer").notNullable();
    table.text("kontakCustomer").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("customer");
};
