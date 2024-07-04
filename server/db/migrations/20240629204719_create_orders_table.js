exports.up = function (knex) {
  return knex.schema.createTable("orders", function (table) {
    table.increments("idOrder").primary();
    table
      .integer("idCustomer")
      .unsigned()
      .notNullable()
      .references("idCustomer")
      .inTable("customer");
    table.integer("idTable").notNullable();
    table.integer("totalPrice").notNullable();
    table.timestamp("waktuPesanan").notNullable();
    table.timestamps(true, true); // Adds created_at and updated_at columns
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("orders");
};
