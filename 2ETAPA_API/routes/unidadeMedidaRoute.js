const router = require("express").Router();
const unidadeMedidaController = require("../controllers/unidadeMedidaController");

router.get("/", unidadeMedidaController.buscarTodos);
router.get("/:id",unidadeMedidaController.buscarPorId);
router.post("/",unidadeMedidaController.criarUnidadeMedida);
router.put("/:id",unidadeMedidaController.editarUnidadeMedida);
router.delete("/:id", unidadeMedidaController.deletar);


module.exports = router;
