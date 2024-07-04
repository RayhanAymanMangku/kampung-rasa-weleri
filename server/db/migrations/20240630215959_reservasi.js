exports.up = function (knex) {
  return knex.schema.createTable("reservasi", function (table) {
    table.increments("idReservasi").primary();
    table.string("namaCustomer").notNullable();
    table.integer("jumlahOrang").notNullable();
    table.string("tempat").notNullable();
    table.string("jenisReservasi").notNullable();
    table.date("tanggalReservasi").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("reservasi");
};
