const express = require("express")
const router = express.Router()

const controller = require ("../controller/menuController")

router.get("/", controller.buscarTodos)
router.get("/:menuId", controller.buscaId)
router.post("/cadastrar", controller.criarMenu)
router.delete("/:menuId", controller.deletarMenu)
router.put("/:menuId", controller.substituirMenu)
router.patch("/atualizar/:menuId", controller.atualizarMenu)



module.exports = router;