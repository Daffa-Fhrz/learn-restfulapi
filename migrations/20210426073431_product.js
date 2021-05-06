		
exports.up = function(knex) {
  return knex.schema.createTable('product', (table) => {
  	table.increments();
  	table.string('name').notNullable();
  	table.text('description');
  	table.integer('price').notNullable();
  	table.timestamp('created_at').defaultTo(knex.fn.now());
  	table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('product');
};
