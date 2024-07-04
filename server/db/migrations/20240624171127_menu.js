exports.up = function (knex) {
  return knex.schema.createTable("menu", function (table) {
    table.increments("idMenu").primary();
    table.string("namaMenu", 255).notNullable();
    table.integer("harga").notNullable();
    table.string("gambar", 255).notNullable();
    table.integer("idKategoriMenu").index().notNullable();
    table.integer("idStaf").index().notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("menu");
};
