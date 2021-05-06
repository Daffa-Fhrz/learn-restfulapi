const { Router } = require('express');

const router = Router();

const { create, getAll, getOne, update, deleteProd } = require("../controllers/product.controller");

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', deleteProd);

module.exports = router;
