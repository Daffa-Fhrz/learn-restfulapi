const express = require("express");
const knex = require("knex");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// router
// import router
const product = require("./routes/product.route");

app.use('/api/product', product);

// listening the server
app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
