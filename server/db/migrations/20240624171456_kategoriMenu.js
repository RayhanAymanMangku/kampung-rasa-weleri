exports.up = function (knex) {
  return knex.schema.createTable("kategori_menu", function (table) {
    table.increments("idKategoriMenu").primary();
    table.string("kategoriMenu", 100).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("kategori_menu");
};
