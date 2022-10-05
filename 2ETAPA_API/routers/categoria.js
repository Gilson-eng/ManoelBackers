const router = require("express").Router();

const categoriaApi = require('../api/categoria');

router.get('/', categoriaApi.getAll);
router.get('/:id',categoriaApi.getById);
router.post('/', categoriaApi.post);
router.put('/:id',categoriaApi.put);
router.delete('/:id', categoriaApi.remove);

module.exports = router;