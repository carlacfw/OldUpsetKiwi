
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('complaint', (table) => {
    table.increments('id')
    table.string('title')
    table.string('complaint')
    table.integer('user_id')
    table.integer('company_id')    
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('complaint')
};
