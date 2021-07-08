
const express = require("express")
const router = express.Router()
const controller = require("../controller/apiController")

router.get("/todos", controller.getAll)
router.get("/:id", controller.getById)

module.exports = router