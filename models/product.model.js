const knex = require('knex');

// find all product
const findAll = () => {
	console.log(knex)
	return knex;
}

module.exports = {
	findAll
};