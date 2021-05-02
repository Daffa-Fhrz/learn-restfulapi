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

// const create = () => {}
// const delete = () => {}
// const update = () => {}


module.exports = {
	getAll,
	getOne,
}