const knex = require("../config/db");

// find all product
const getAll = async () => {
	try {
		const product = await knex.select().from("product");
		return product;
	} catch (err) {
		throw new Error(err);
	}
};

const getOne = async (id) => {
	try {
		const product = await knex.select().from("product").where(id);
		return product;
	} catch (err) {
		throw new Error(err);
	}
};

const create = async (data) => {
	try {
		const product = await knex("product").insert(data);
		return data;
	} catch (err) {
		throw new Error(err);
	}
};

module.exports = {
	getAll,
	getOne,
	create
};
