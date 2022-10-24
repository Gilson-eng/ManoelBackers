const router = require("express").Router();
const produtoController = require("../controllers/produtoController");

router.get("/", produtoController.buscarTodos);
router.get("/:id",produtoController.buscarPorId);
router.post("/",produtoController.inserirPerfil);
router.put("/:id",produtoController.editarPerfil);
router.delete("/:id", produtoController.deletar);


module.exports = router;