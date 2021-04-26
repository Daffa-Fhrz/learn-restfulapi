const knex = require("../config/db");

// find all product
const findAll = async () => {
	const product = await knex.select().from("product");
	return product;
};

module.exports = {
	findAll,
};
