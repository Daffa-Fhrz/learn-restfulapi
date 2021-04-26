const { Router } = require('express');

const router = Router();

const { getOne } = require('../config/db');

router.get('/');
router.get('/:id');
router.post('/');
router.put('/:id');

module.exports = router;