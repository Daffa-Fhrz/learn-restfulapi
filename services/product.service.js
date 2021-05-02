const model = require('../models/product.model.js');

const getAll = () => {
	let product = null;
	let error = null;
	try {
		product = model.getAll();
	} catch (err) {
		error = err;
	}

	return[product, error]
}

// const getOne = () => {}
// const create = () => {}
// const delete = () => {}
// const update = () => {}


module.exports = {
	getAll,
}