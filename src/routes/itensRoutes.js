const express = require("express")
const router = express.Router()

const controller = require ("../controller/itensController")

router.get("/", controller.buscarTodos)
router.get("/nome", controller.buscarNome)
router.get("/:itemId", controller.buscaId)
router.post("/cadastrar", controller.criarPrato)
router.delete("/:itemId", controller.deletarPrato)
router.put("/:itemId", controller.substituirPrato)
router.patch("/atualizar/:itemId", controller.atualizarPrato)



module.exports = router;