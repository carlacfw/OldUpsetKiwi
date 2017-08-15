
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('companies').del()
    .then(function () {
      // Inserts seed entries
      return knex('companies').insert([
        {id: 1, name: 'countdown', email: 'customerinfo@countdown.co.nz', website: 'https://www.countdown.co.nz/'},
        {id: 2, name: 'new world', email: '', website: 'http://www.newworld.co.nz/'}
      ]);
    });
};
