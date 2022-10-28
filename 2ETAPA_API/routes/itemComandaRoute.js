const router = require("express").Router();
const itemComandaController = require("../controllers/itemComandaController");

router.get("/", itemComandaController.buscarTodos);
router.get("/:id",itemComandaController.buscarPorId);
router.post("/",itemComandaController.criarItemComanda);
router.put("/:id",itemComandaController.editarItemComanda);
router.delete("/:id", itemComandaController.deletar);


module.exports = router;

