
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('complaint').del()
    .then(function () {
      // Inserts seed entries
      return knex('complaint').insert([
        {id: 1, complaint: ''}
      ]);
    });
};
