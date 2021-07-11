const express = require("express")
const router = express.Router()

const controller = require ("../controller/apiController")

/**
 * @api {get} /api/restaurante Api de busca completa dos restaurantes por nome
 * @apiGroup Api Completa
 *
 * @apiParam  {String} nome nome a ser buscado
 * @apiSuccess {String} json Json do restaurante com as informações completas
 * 
 * @apiSuccessExample {json} Sucesso
 * HTTP/1.1 200 OK
 *  {
        "restauranteId": "1",
        "nomeRestaurante": "Sabor do Acre",
        "horarioFuncionamento": "18h às 23h",
        "diasFuncionamento": "Seg à Sáb",
        "localizacao": "Rua alvorada, 25, Bosque",
        "formasPagamento": "Cartões de crédito, débito, em dinheiro e pix",
        "menu": [
            {
                "menuId": "1",
                "restauranteId": "1",
                "tituloMenu": "Café da manhã",
                "pratos": [
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
                    },
                    {
                        "itemId": "3",
                        "menuId": "1",
                        "categoriaItem": "Almoço",
                        "nome": "Sopa Feijão",
                        "valorItem": "R$23,00"
                    }
                ]
            }
        ]
 */
router.get("/restaurante", controller.buscarRestaurante)

/**
 * @api {get} /api/restaurante/:id Api de busca completa dos restaurantes por id
 * @apiGroup Api Completa
 *
 * @apiParam  {number} id id do restaurante a ser buscado
 * @apiSuccess {String} json Json do restaurante com as informações completas
 * 
 * @apiSuccessExample {json} Sucesso
 * HTTP/1.1 200 OK
 *  {
        "restauranteId": "1",
        "nomeRestaurante": "Sabor do Acre",
        "horarioFuncionamento": "18h às 23h",
        "diasFuncionamento": "Seg à Sáb",
        "localizacao": "Rua alvorada, 25, Bosque",
        "formasPagamento": "Cartões de crédito, débito, em dinheiro e pix",
        "menu": [
            {
                "menuId": "1",
                "restauranteId": "1",
                "tituloMenu": "Café da manhã",
                "pratos": [
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
                    },
                    {
                        "itemId": "3",
                        "menuId": "1",
                        "categoriaItem": "Almoço",
                        "nome": "Sopa Feijão",
                        "valorItem": "R$23,00"
                    }
                ]
            }
        ]
 */
router.get("/restaurante/:id", controller.buscarRestaurantePorId)

module.exports = router;