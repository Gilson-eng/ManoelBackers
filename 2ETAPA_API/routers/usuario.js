const router = require("express").Router();

const usuarioApi = require('../api/usuario');

router.get('/', usuarioApi.getAll);
router.get('/:id', usuarioApi.getById);
router.post('/', usuarioApi.post);
router.put('/:id', usuarioApi.put);
router.delete('/:id', usuarioApi.remove);

module.exports = router;


