const { Router } = require('express');

const router = Router();

const { create } = require("../controllers/product.controller");

router.get('/');
router.get('/:id');
router.post('/', create);
router.put('/:id');

module.exports = router;