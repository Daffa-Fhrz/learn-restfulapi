const model = require('../models/product.model.js');

const getAll = () => {
	let product = null;
	let error = null;
	try {
		product = model.getAll();
	} catch (err) {
		console.error(err);
		error = err;
	}

	return[product, error]
}

const getOne = (id) => {
	let product = null;
	let error = null;
	try {
		product = model.getOne(id);
	} catch (err) {
		console.error(err);
		error = err
	}

	return[product, error];
}

const create = (data) => {
	let product = null;
	let error = null;
	try {
		product = model.create(data);
	} catch (err) {
		console.error(err);
		error = err
	}

	return[product, error];
}

// const delete = (id) => {}

const update = (id, data) => {
	let product = null;
	let error = null;
	try {
		product = model.update(data);
	} catch (err) {
		console.error(err);
		error = err
	}

	return[product, error];	
}


module.exports = {
	getAll,
	getOne,
	create,
	update,
}