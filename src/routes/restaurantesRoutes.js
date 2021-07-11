const express = require("express")
const router = express.Router()
const controller = require("../controller/restaurantesController")

router.get("/", controller.buscarTodos)
router.get("/:restauranteId", controller.buscaId)
router.post("/cadastrar", controller.criarRestaurante)
router.delete("/:restauranteId", controller.deletarRestaurante)
router.put("/:restauranteId", controller.substituirRestaurante)
router.patch("/atualizar/:restauranteId", controller.atualizarRestaurante)

module.exports = router