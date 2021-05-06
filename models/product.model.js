const knex = require("../config/db");

// find all product
const getAll = () => {
	return knex.select().from("product");
};

const getOne = (id) => {
	const product = knex.select().from("product").where(id);
	return product;
};

const create = (data) => {
	const product = knex("product").insert(data);
	return data;
};

const deleteProd = (id) => {
	return knex("product").where(id).del();
};

const update = (id, data) => {
	return knex("product").where(id).update(data);
};

module.exports = {
	getAll,
	getOne,
	create,
	deleteProd,
	update
};
