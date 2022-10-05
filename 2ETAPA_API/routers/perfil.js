const router = require("express").Router();

const perfilApi = require('../api/perfil');

router.get('/', perfilApi.getAll);
router.get('/:id',perfilApi.getById);
router.post('/', perfilApi.post);
router.put('/:id', perfilApi.put);
router.delete('/:id', perfilApi.remove);

module.exports = router;