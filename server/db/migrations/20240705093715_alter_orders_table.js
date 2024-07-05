exports.up = function (knex) {
  return knex.schema.alterTable("orders", function (table) {
    table.datetime("waktuPesanan").notNullable().alter();
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable("orders", function (table) {
    table.timestamp("waktuPesanan").notNullable().alter();
  });
};
