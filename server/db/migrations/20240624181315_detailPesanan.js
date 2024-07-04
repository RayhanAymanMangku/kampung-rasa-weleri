exports.up = function (knex) {
  return knex.schema.createTable("detailPesanan", function (table) {
    table.increments("idDetailPesanan").primary();
    table.integer("idPesanan").unsigned().index().nullable();
    table.integer("idMenu").unsigned().index().nullable();
    table.integer("quantity").unsigned().nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("detailPesanan");
};
