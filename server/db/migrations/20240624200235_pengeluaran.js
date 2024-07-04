exports.up = function (knex) {
  return knex.schema.createTable("pengeluaran", function (table) {
    table.increments("idPengeluaran").primary();
    table
      .string("namaPengeluaran", 255)
      .notNullable()
      .collate("utf8mb4_general_ci");
    table.integer("jumlahPengeluaran").notNullable();
    table.date("tanggalPengeluaran").notNullable();
    table.text("keterangan").nullable().collate("utf8mb4_general_ci");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("pengeluaran");
};
