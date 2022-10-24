const router = require ("express").Router();
const categoriaController = require("../controllers/categoriaController");

router.get("/", categoriaController.buscarTodos);
router.get("/:id", categoriaController.buscarPorId);
router.post("/", categoriaController.inserirCategoria);
router.put("/:id", categoriaController.editarCategoria);
router.delete("/:id", categoriaController.deletar);

module.exports = router;
