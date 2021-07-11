const express = require("express")
const router = express.Router()

const controller = require ("../controller/apiController")

router.get("/restaurante", controller.buscarRestaurante)
//router.get("/restaurante/:id/menu", controller.buscarTodos)
//router.get("/menu/prato/", controller.buscarTodos)

module.exports = router;