const router = require("express").Router();

const usuarioController = require("../controllers/usuarioController");

router.get("/", usuarioController.buscarTodos);
router.get("/:id",usuarioController.buscarPorId);
router.post("/",usuarioController.inserirUsuario);
router.put("/:id",usuarioController.editarUsuario);
router.delete("/:id", usuarioController.deletar);


module.exports = router;