exports.up = function (knex) {
  return knex.schema.createTable("staf", function (table) {
    table.increments("id_staf").primary();
    table
      .string("username", 255)
      .notNullable()
      .collate("utf8mb4_general_ci")
      .index();
    table.string("kontakStaf", 255).notNullable().collate("utf8mb4_general_ci");
    table.string("password", 255).notNullable().collate("utf8mb4_general_ci");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("staf");
};
