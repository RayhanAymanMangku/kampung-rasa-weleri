exports.up = function (knex) {
  return knex.schema.createTable("orderDetails", function (table) {
    table.increments("idDetail").primary();
    table
      .integer("idOrder")
      .unsigned()
      .notNullable()
      .references("idOrder")
      .inTable("orders")
      .onDelete("CASCADE");
    table
      .integer("idMenu")
      .unsigned()
      .notNullable()
      .references("idMenu")
      .inTable("menu")
      .onDelete("CASCADE");
    table.string("namaMenu").notNullable();
    table.integer("quantity").notNullable();
    table.timestamps(true, true); // Adds created_at and updated_at columns
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("orderDetails");
};
