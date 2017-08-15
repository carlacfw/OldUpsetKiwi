
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('complaint', (table) => {
    table.increments('id')
    table.string('complaint')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('complaint')
};
