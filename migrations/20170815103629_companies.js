
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('companies', (table) => {
    table.increments('id')
    table.string('name')
    table.string('email')
    table.string('website')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('companies')
};
