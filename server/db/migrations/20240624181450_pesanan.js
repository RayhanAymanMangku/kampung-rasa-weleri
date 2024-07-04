exports.up = function (knex) {
  return knex.schema.createTable("pesanan", function (table) {
    table.increments("idPesanan").primary();
    table.integer("idCustomer").unsigned().index().nullable();
    table.datetime("waktuPesanan").nullable();
    table.integer("totalPrice").unsigned().nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("pesanan");
};
