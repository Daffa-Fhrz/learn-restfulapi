const { Router } = require('express');

const router = Router();

router.get('/');
router.get('/:id');
router.post('/');
router.put('/:id');

module.exports = router;