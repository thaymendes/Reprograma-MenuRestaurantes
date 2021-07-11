
const pratosJson = require("../model/itensMenu.json")
const menuJson = require("../model/menu.json")
const restauranteJson = require("../model/restaurantes.json")
const utils = require("../utils/restauranteUtils")


const buscarRestaurante = (request, response)=>{
    const nomeRestaurante = request.query.nome.toLowerCase()
    const restaurantes = restauranteJson.filter( r => {
        const res = r.nomeRestaurante.toLowerCase().includes(nomeRestaurante)
        return res}
    )


    if (restaurantes == "" || restaurantes == undefined) {
        response.status(404).json({
            "error": 404,
            "mensagem": "Restaurante não encontrado!"
        })

    } else {

        restaurantes.forEach(restaurante => {
            const menus = menuJson.filter(m => m.restauranteId === restaurante.restauranteId)
            menus.forEach(menu => {
                const pratos = pratosJson.filter(p => p.menuId == menu.menuId)
                menu.pratos = pratos
            });
            restaurante.menu = menus
        });

        response.status(200).send(restaurantes)
    }
}


const buscarRestaurantePorId = (request, response)=>{
    const restauranteId = request.params.id
    const restaurante = utils.filtrarRestaurantePorId(restauranteJson, restauranteId)

    if (restaurante == "" || restaurante == undefined) {
        response.status(404).json({
            "error": 404,
            "mensagem": "Restaurante não encontrado!"
        })

    } else {

        const menus = menuJson.filter(m => m.restauranteId === restaurante.restauranteId)
        menus.forEach(menu => {
            const pratos = pratosJson.filter(p => p.menuId == menu.menuId)
            menu.pratos = pratos
        });
        restaurante.menu = menus
    

        response.status(200).send(restaurante)
    }    
}


module.exports ={
    buscarRestaurante,
    buscarRestaurantePorId
}