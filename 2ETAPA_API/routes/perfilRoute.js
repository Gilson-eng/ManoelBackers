const router = require("express").Router();
const perfilController = require("../controllers/perfilController");

router.get("/", perfilController.buscarTodos);
router.get("/:id",perfilController.buscarPorId);
router.post("/",perfilController.inserirPerfil);
router.put("/:id",perfilController.editarPerfil);
router.delete("/:id", perfilController.deletar);


module.exports = router;