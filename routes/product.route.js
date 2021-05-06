const { Router } = require('express');

const router = Router();

const { create, getAll, getOne} = require("../controllers/product.controller");

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', create);
router.put('/:id');

module.exports = router;
