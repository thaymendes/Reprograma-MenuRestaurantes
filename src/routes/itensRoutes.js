const express = require("express")
const router = express.Router()

const controller = require ("../controller/itensController")
/**
 * @api {get} /pratos/ buscar todos os menus
 * @apiGroup Pratos
 *
 * @apiSuccess {String} lista lista de menus
 * 
 * @apiSuccessExample {json} Sucesso
 * HTTP/1.1 200 OK
 *  [
     {
        "itemId": "1",
        "menuId": "1",
        "categoriaItem": "Café",
        "nome": "Baixaria",
        "valorItem": "R$13,00"
    },
    {
        "itemId": "2",
        "menuId": "1",
        "categoriaItem": "Café",
        "nome": "Misto quente",
        "valorItem": "R$10,00"
    }
]
 */
router.get("/", controller.buscarTodos)

/**
 * @api {get} /api/menu/nome busca pratro pelo nome
 * @apiGroup Pratos
 *
 * @apiParam  {String} nome nome a ser buscado
 * @apiSuccess {String} json Json com as informações dos pratos
 * 
 * @apiSuccessExample {json} Sucesso
  * HTTP/1.1 200 OK
 *  [
     {
        "itemId": "1",
        "menuId": "1",
        "categoriaItem": "Café",
        "nome": "Baixaria",
        "valorItem": "R$13,00"
    },
    {
        "itemId": "2",
        "menuId": "1",
        "categoriaItem": "Café",
        "nome": "Misto quente",
        "valorItem": "R$10,00"
    }
]
 */
router.get("/nome", controller.buscarNome)

/**
 * @api {get} /api/menu/:itemId busca prato pelo id
 * @apiGroup Pratos
 *
 * @apiParam  {number} itemId nome a ser buscado
 * @apiSuccess {String} json Json com as informações dos pratos
 * 
 * @apiSuccessExample {json} Sucesso
  * HTTP/1.1 200 OK
 *  {
        "itemId": "1",
        "menuId": "1",
        "categoriaItem": "Café",
        "nome": "Baixaria",
        "valorItem": "R$13,00"
    }
 */
router.get("/:itemId", controller.buscaId)

/**
 * @api {post} /api/menu/cadastrar cadastra prato
 * @apiGroup Pratos
 *
 * @apiParam  {number} menuId id do menu do prato
 * @apiParam  {String} categoriaItem categoria do prato
 * @apiParam  {String} nome do prato
 * @apiParam  {String} valoritem valor individual do prato
 * 
 * @apiSuccess {String} json Json com as informações dos pratos
 * @apiSuccessExample {json} Sucesso
 * HTTP/1.1 201 CREATED
 */
router.post("/cadastrar", controller.criarPrato)

/**
 * @api {delete} /api/menu/:itemId remove prato pelo id
 * @apiGroup Pratos
 *
 * @apiParam  {number} itemId id do menu do prato
 * 
 * @apiSuccessExample {json} Sucesso
 * HTTP/1.1 200 OK
 */
router.delete("/:itemId", controller.deletarPrato)

/**
 * @api {put} /api/menu/:itemId substituir o prato
 * @apiGroup Pratos
 *
 * @apiParam  {number} itemId id do prato
 * @apiParam  {number} menuId id do menu do prato
 * @apiParam  {String} categoriaItem categoria do prato
 * @apiParam  {String} nome do prato
 * @apiParam  {String} valoritem valor individual do prato
 * 
 * @apiSuccess {String} json Json com as informações dos pratos
 * @apiSuccessExample {json} Sucesso
 * HTTP/1.1 200 OK
 */
router.put("/:itemId", controller.substituirPrato)

/**
 * @api {patch} /api/menu/atualizar/:itemId atualizar prato
 * @apiGroup Pratos
 * 
 * @apiParam  {number} itemId id do prato
 * @apiParam  {number} menuId id do menu do prato
 * @apiParam  {String} categoriaItem categoria do prato
 * @apiParam  {String} nome do prato
 * @apiParam  {String} valoritem valor individual do prato
 * 
 * @apiSuccess {String} json Json com as informações dos pratos
 * @apiSuccessExample {json} Sucesso
 * HTTP/1.1 200 OK
 */
router.patch("/atualizar/:itemId", controller.atualizarPrato)

module.exports = router;