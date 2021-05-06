const productModel = require("../models/product.model");

const create = (req, res) => {
	const data = req.body;

	productModel
		.create(data)
		.then(product => {
			
			res.status(201).json({
				code: 201,
				status: "Created",
				data: [
					{
						id: product[0],
						name: req.body.name,
						description: req.body.description,
						price: req.body.price
					}
				],
			});
		
		})
		.catch(err => {
			if (err.errno === 1364){
				res.status(400).json({
					code: 400,
					status: "Bad Request",
					error: "name and price is required"
				});
			} else  {
				res.status(500).json({
					code: 500,
					status: "Internal Server Error",
					error: "server error"
				});
			}

			console.error(err);
		});
};

const getAll = (req, res) => {
	productModel.getAll()
		.then(product => {
			
			res.status(200).json({
				code: 200,
				status: "Ok",
				data: product,
			});
		
		})
		.catch(err => {

			res.status(500).json({
				code: 500,
				status: "Internal Server Error",
				error: "server error"
			});

			console.error(err);

		});
}

const getOne = (req, res) => {
	productModel.getOne(req.params)
		.then(product => {
			
			res.status(200).json({
				code: 200,
				status: "Ok",
				data: product,
			});
		
		})
		.catch(err => {

			res.status(500).json({
				code: 500,
				status: "Internal Server Error",
				error: "server error"
			});

			console.error(err);

		});
}

const update = (req, res) => {
	const data = {
		...req.body,
		"updated_at": new Date
	}

	productModel.update(req.params, data)
		.then(product => {

			res.status(200).json({
				code: 200,
				status: "Ok",
				data: product[0],
			});

		
		})
		.catch(err => {

			res.status(500).json({
				code: 500,
				status: "Internal Server Error",
				error: "server error"
			});

			console.error(err);

		});
}


const deleteProd = (req, res) => {
	const data = {
		...req.body,
		"updated_at": new Date
	}


	console.log(productModel.deleteProd);

	productModel.deleteProd(req.params, data)
		.then(product => {

			console.log(product);

			res.status(200).json({
				code: 200,
				status: "Ok",
				data: product[0],
			});

		
		})
		.catch(err => {

			res.status(500).json({
				code: 500,
				status: "Internal Server Error",
				error: "server error"
			});

			console.error(err);

		});
}

module.exports = {
	create,
	getAll,
	getOne,
	update,
	deleteProd
};