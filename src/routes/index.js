const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  response.status(200).send({
    title: 'RestaurantesMenu',
    version: '1.0.0',
    "mensagem": "Bem vindos ao RestaurantesMenu"
  });
});

module.exports = router;