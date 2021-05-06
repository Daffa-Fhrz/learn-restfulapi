const { Router } = require('express');

const router = Router();

const { create, getAll } = require("../controllers/product.controller");

router.get('/', getAll);
router.get('/:id');
router.post('/', create);
router.put('/:id');

module.exports = router;