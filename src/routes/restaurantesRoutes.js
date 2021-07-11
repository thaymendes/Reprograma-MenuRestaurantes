const express = require("express")
const router = express.Router()
const controller = require("../controller/restaurantesController")

/**
 * @api {get} /restaurantes/ buscar todos os restaurantes
 * @apiGroup Restaurantes
 *
 * @apiSuccess {String} lista lista de restaurantes
 * 
 * @apiSuccessExample {json} Sucesso
 * HTTP/1.1 200 OK
 *  [
    {
        "restauranteId": "1",
        "nomeRestaurante": "Sabor do Acre",
        "horarioFuncionamento": "18h às 23h",
        "diasFuncionamento": "Seg à Sáb",
        "localizacao": "Rua alvorada, 25, Bosque",
        "formasPagamento": "Cartões de crédito, débito, em dinheiro e pix"
    },
    {
        "restauranteId": "2",
        "nomeRestaurante": "Sabor do Sul",
        "horarioFuncionamento": "18h às 20h",
        "diasFuncionamento": "Seg à Sex",
        "localizacao": "Rua gavião, 42, Floresta",
        "formasPagamento": "Cartões de crédito, débito, em dinheiro e pix"
    }
]
 */
router.get("/", controller.buscarTodos)

/**
 * @api {get} /restaurantes/:restauranteId buscar restaurante por id
 * @apiParam {number} restauranteId id do restaurante
 * @apiGroup Restaurantes
 *
 * @apiSuccess {String}  restauranteId id do restaurantes
 * @apiSuccess {String}  nomeRestaurante nome do restaurantes
 * @apiSuccess {String}  horarioFuncionamento horarios de funcionamento do restaurantes
 * @apiSuccess {String}  diasFuncionamento dias de funcionamento do restaurantes
 * @apiSuccess {String}  localizacao endereço do restaurantes
 * @apiSuccess {String}  formasPagamento formade de pagamento aceitas no restaurantes
 * 
 * @apiSuccessExample {json} Sucesso
 * HTTP/1.1 200 OK
 *  {
    "restauranteId": "1",
    "nomeRestaurante": "Sabor do Acre",
    "horarioFuncionamento": "18h às 23h",
    "diasFuncionamento": "Seg à Sáb",
    "localizacao": "Rua alvorada, 25, Bosque",
    "formasPagamento": "Cartões de crédito, débito, em dinheiro e pix"
}
 */
router.get("/:restauranteId", controller.buscaId)

/**
 * @api {post} /restaurantes/cadastrar criar restaurante
 * @apiParam {String}  restauranteId id do restaurantes
 * @apiParam {String}  nomeRestaurante nome do restaurantes
 * @apiParam {String}  horarioFuncionamento horarios de funcionamento do restaurantes
 * @apiParam {String}  diasFuncionamento dias de funcionamento do restaurantes
 * @apiParam {String}  localizacao endereço do restaurantes
 * @apiParam {String}  formasPagamento formade de pagamento aceitas no restaurantes
 * @apiGroup Restaurantes
 *
 * @apiSuccess {String}  restauranteId id do restaurantes
 * @apiSuccess {String}  nomeRestaurante nome do restaurantes
 * @apiSuccess {String}  horarioFuncionamento horarios de funcionamento do restaurantes
 * @apiSuccess {String}  diasFuncionamento dias de funcionamento do restaurantes
 * @apiSuccess {String}  localizacao endereço do restaurantes
 * @apiSuccess {String}  formasPagamento formade de pagamento aceitas no restaurantes
 * 
 * @apiSuccessExample {json} Sucesso
 * HTTP/1.1 200 OK
 *  {
    "restauranteId": "1",
    "nomeRestaurante": "Sabor do Acre",
    "horarioFuncionamento": "18h às 23h",
    "diasFuncionamento": "Seg à Sáb",
    "localizacao": "Rua alvorada, 25, Bosque",
    "formasPagamento": "Cartões de crédito, débito, em dinheiro e pix"
}
 */
router.post("/cadastrar", controller.criarRestaurante)


/**
 * @api {delete} /restaurantes/:restauranteId deletar restaurante por id
 * @apiParam {number} restauranteId id do restaurante
 * @apiGroup Restaurantes
 * 
 */
router.delete("/:restauranteId", controller.deletarRestaurante)

/**
 * @api {put} /restaurantes/:restauranteId substituir restaurante
 * @apiParam {number} restauranteId id do restaurante
 * @apiParam {String}  restauranteId id do restaurantes
 * @apiParam {String}  nomeRestaurante nome do restaurantes
 * @apiParam {String}  horarioFuncionamento horarios de funcionamento do restaurantes
 * @apiParam {String}  diasFuncionamento dias de funcionamento do restaurantes
 * @apiParam {String}  localizacao endereço do restaurantes
 * @apiParam {String}  formasPagamento formade de pagamento aceitas no restaurantes
 * @apiGroup Restaurantes
 *
 * @apiSuccess {String}  restauranteId id do restaurantes
 * @apiSuccess {String}  nomeRestaurante nome do restaurantes
 * @apiSuccess {String}  horarioFuncionamento horarios de funcionamento do restaurantes
 * @apiSuccess {String}  diasFuncionamento dias de funcionamento do restaurantes
 * @apiSuccess {String}  localizacao endereço do restaurantes
 * @apiSuccess {String}  formasPagamento formade de pagamento aceitas no restaurantes
 * 
 * @apiSuccessExample {json} Sucesso
 * HTTP/1.1 200 OK
 *  {
    "restauranteId": "1",
    "nomeRestaurante": "Sabor do Acre",
    "horarioFuncionamento": "18h às 23h",
    "diasFuncionamento": "Seg à Sáb",
    "localizacao": "Rua alvorada, 25, Bosque",
    "formasPagamento": "Cartões de crédito, débito, em dinheiro e pix"
}
 */
router.put("/:restauranteId", controller.substituirRestaurante)


/**
 * @api {put} /restaurantes/atualizar/:restauranteId atualizar restaurante parcialmente
 * @apiParam {number} restauranteId id do restaurante
 * @apiParam {String}  restauranteId id do restaurantes
 * @apiParam {String}  nomeRestaurante nome do restaurantes
 * @apiParam {String}  horarioFuncionamento horarios de funcionamento do restaurantes
 * @apiParam {String}  diasFuncionamento dias de funcionamento do restaurantes
 * @apiParam {String}  localizacao endereço do restaurantes
 * @apiParam {String}  formasPagamento formade de pagamento aceitas no restaurantes
 * @apiGroup Restaurantes
 *
 * @apiSuccess {String}  restauranteId id do restaurantes
 * @apiSuccess {String}  nomeRestaurante nome do restaurantes
 * @apiSuccess {String}  horarioFuncionamento horarios de funcionamento do restaurantes
 * @apiSuccess {String}  diasFuncionamento dias de funcionamento do restaurantes
 * @apiSuccess {String}  localizacao endereço do restaurantes
 * @apiSuccess {String}  formasPagamento formade de pagamento aceitas no restaurantes
 * 
 * @apiSuccessExample {json} Sucesso
 * HTTP/1.1 200 OK
 *  {
    "restauranteId": "1",
    "nomeRestaurante": "Sabor do Acre",
    "horarioFuncionamento": "18h às 23h",
    "diasFuncionamento": "Seg à Sáb",
    "localizacao": "Rua alvorada, 25, Bosque",
    "formasPagamento": "Cartões de crédito, débito, em dinheiro e pix"
}
 */
router.patch("/atualizar/:restauranteId", controller.atualizarRestaurante)

module.exports = router