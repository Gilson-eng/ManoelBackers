const router = require("express").Router();
 const movimentoController = require("../controllers/movimentoController");

 router.get("/", movimentoController.buscarTodos);
router.get("/:id", movimentoController.buscarPorId);
router.post("/", movimentoController.inserirMovimento);
router.put("/:id", movimentoController.editarMovimento);
router.delete("/:id", movimentoController.deletar);

module.exports = router;