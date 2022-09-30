const router = require("express").Router();

const produtosApi = require('../api/produtos');

router.get('/', produtosApi.getAll);
router.get('/:id',produtosApi.getById);
router.post('/', produtosApi.post);
router.put('/:id', produtosApi.put);
router.delete('/:id', produtosApi.remove);

module.exports = router;