const router = require("express").Router();

const testeController = require("../controllers/testeController");

router.get("/", testeController.buscarTodos);
router.get("/:id",testeController.buscarPorId);
router.post("/",testeController.inserirProduto);
router.put("/:id",testeController.editarProduto);
router.delete("/:id", testeController.deletar);


module.exports = router;