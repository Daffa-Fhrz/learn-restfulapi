const knex = require('knex');

const findAll = () => {
	return knex.select().from('product');
}