const knex = require("../config/db");

// find all product
const getAll = async () => {
	const product = await knex.select().from("product");
	return product;
};

const 

module.exports = {
	getAll,
};
