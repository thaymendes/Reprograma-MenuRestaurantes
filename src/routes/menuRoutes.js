const express = require("express")
const router = express.Router()

const controller = require ("../controller/menuController")

/**
 * @api {get} /menu/ buscar todos os menus
 * @apiGroup Menu
 *
 * @apiSuccess {String} lista lista de menus
 * 
 * @apiSuccessExample {json} Sucesso
 * HTTP/1.1 200 OK
 *  [
    {
        "menuId": "1",
        "restauranteId": "1",
        "tituloMenu": "Café da manhã"
    },
    {
        "menuId": "2",
        "restauranteId": "3",
        "tituloMenu": "Almoço"
    }
]
 */
router.get("/", controller.buscarTodos)


/**
 * @api {get} /menu/:menuId buscar menu por id
 * @apiParam {number} menuId id do menu
 * @apiGroup Menu
 *
 * @apiSuccess {String}  menuId id do menu
 * @apiSuccess {String}  restauranteId id do menu
 * @apiSuccess {String}  tituloMenu titulo do menu
 * 
 * @apiSuccessExample {json} Sucesso
 * HTTP/1.1 200 OK
 *  {
        "menuId": "2",
        "restauranteId": "3",
        "tituloMenu": "Almoço"
    }
 */
router.get("/:menuId", controller.buscaId)

/**
 * @api {post} /menu/cadastrar criar menu
 * @apiParam {String}  restauranteId id do restaurante
 * @apiParam {String}  tituloMenu nome do restaurantes
 * @apiGroup Menu
 *
 * @apiSuccess {String}  menuId id do menu
 * @apiSuccess {String}  restauranteId id do menu
 * @apiSuccess {String}  tituloMenu titulo do menu
 * 
 * 
 * @apiSuccessExample {json} Sucesso
 * HTTP/1.1 200 OK
 *   {
        "menuId": "2",
        "restauranteId": "3",
        "tituloMenu": "Almoço"
    }
 */
router.post("/cadastrar", controller.criarMenu)

/**
 * @api {delete} /menu/:menuId deletar menu por id
 * @apiParam {number} menuId id do menu
 * @apiGroup Menu
 */
router.delete("/:menuId", controller.deletarMenu)

/**
 * @api {put} /menu/:menuId substituir menu
 * @apiParam {number} menuId id do restaurante
 * @apiParam {String}  restauranteId id do restaurante
 * @apiParam {String}  tituloMenu nome do restaurantes
 * @apiGroup Menu
 *
 * @apiSuccess {String}  menuId id do menu
 * @apiSuccess {String}  restauranteId id do menu
 * @apiSuccess {String}  tituloMenu titulo do menu
 * 
 * @apiSuccessExample {json} Sucesso
 * HTTP/1.1 200 OK
 *  {
        "menuId": "2",
        "restauranteId": "3",
        "tituloMenu": "Almoço"
    }
 */
router.put("/:menuId", controller.substituirMenu)

/**
 * @api {patch} /menu/atualizar/:restauranteId atualizar menu parcialmente
 * @apiParam {number} restauranteId id do restaurante
 * @apiParam {String}  restauranteId id do restaurante
 * @apiParam {String}  tituloMenu nome do menu
 * @apiGroup Menu
 *
 * @apiSuccess {String}  menuId id do menu
 * @apiSuccess {String}  restauranteId id do menu
 * @apiSuccess {String}  tituloMenu titulo do menu
 * @apiSuccessExample {json} Sucesso
 * HTTP/1.1 200 OK
 *   {
        "menuId": "2",
        "restauranteId": "3",
        "tituloMenu": "Almoço"
    }
 */
router.patch("/atualizar/:menuId", controller.atualizarMenu)



module.exports = router;