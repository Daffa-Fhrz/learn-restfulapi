const knex = require("../config/db");

const getAll = () => {
	return knex.select().from("product");
};

const getOne = (id) => {
	return knex.select().from("product").where(id);
};

const create = (data) => {
	return knex("product").insert(data);
};

const deleteProd = (id) => {
	const deleting = knex("product").where(id).del();

	return Promise.all([getOne(id), deleting]);
};

const update = (id, data) => {
	const updating = knex("product").where(id).update(data);

	return Promise.all([updating, getOne(id)]);
};

module.exports = {
	getAll,
	getOne,
	create,
	deleteProd,
	update
};