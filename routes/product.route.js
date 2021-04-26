const { Router } = require('express');

const router = Router();

const productModel = require('../models/product.model');

router.get('/');

router.get('/:id');
router.post('/');
router.put('/:id');

module.exports = router;