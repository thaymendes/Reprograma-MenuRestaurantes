const express = require('express');
const router = express.Router();

/**
 * @api {get} / raiz do projeto
 * @apiGroup Sistema
 *
 * @apiSuccess {String} title titulo do Sistema
 * @apiSuccess {String} version titulo do Sistema
 * @apiSuccess {String} message titulo do Sistema
 * 
 * @apiSuccessExample {json} Sucesso
 * HTTP/1.1 200 OK
 *  {
 *    titulo: 'RestaurantesMenu',
 *    versao: '1.0.0',
 *    mensagem: "Bem vindos ao Meu Restaurante"
 *  } 
 */
router.get('/', (request, response) => {
  response.status(200).send({
    titulo: 'RestaurantesMenu',
    versao: '1.0.0',
    mensagem: "Bem vindos ao Meu Restaurante"
  });
});

module.exports = router;