const express = require('express');
const knex = require('knex')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// connection
const knexfile = require('./knexfile');
const NODE_ENV = process.env.NODE_ENV || 'development';

knex(knexfile[NODE_ENV]);
console.log(process.env.DATABASE);

// listening the server
app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
})