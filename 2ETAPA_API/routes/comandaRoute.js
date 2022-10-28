const router = require("express").Router();
const comandaController = require("../controllers/comandaController");

router.get("/", comandaController.buscarTodos);
router.get("/:id",comandaController.buscarPorId);
router.post("/",comandaController.inserirComanda);
router.put("/:id",comandaController.editarComanda);
router.delete("/:id", comandaController.deletar);


module.exports = router;