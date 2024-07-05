exports.up = function (knex) {
  return knex.schema.table("pesanan", function (table) {
    table.text("status").nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.table("pesanan", function (table) {
    table.dropColumn("status");
  });
};
