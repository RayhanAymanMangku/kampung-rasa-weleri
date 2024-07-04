exports.up = function (knex) {
  return knex.schema.createTable("tables", function (table) {
    table.increments("idTable").primary();
    table.string("jenisEvent", 255).collate("utf8mb4_general_ci").nullable();
    table.string("namaMeja", 255).collate("utf8mb4_general_ci").nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("tables");
};
