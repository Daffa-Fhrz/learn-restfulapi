const knex = require("../config/db");

// find all product
const findAll = () => {
	return knex.select().from("product");
};

module.exports = {
	findAll,
};
