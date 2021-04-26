const knex = require("../config/db");

// find all product
const getAll = async () => {
	const product = await knex.select().from("product");
	return product;
}

const getOne = async (id) => {
	const product = await knex.select().from("product").where(id)
}

module.exports = {
	getAll,
	getOne
};
