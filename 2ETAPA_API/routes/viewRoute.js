const router = require("express").Router();
const viewController = require('../controllers/viewController');

router.get("/",viewController.buscarTodos);
router.get("/:id",viewController.buscarPorId);



module.exports = router;

