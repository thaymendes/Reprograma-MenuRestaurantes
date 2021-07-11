
const pratosJson = require("../model/itensMenu.json")
const menuJson = require("../model/menu.json")
const restauranteJson = require("../model/restaurantes.json")


const buscarRestaurante = (request, response)=>{
    const nomeRestaurante = request.query.nome.toLowerCase()
    const restaurantes = restauranteJson.filter( r => {
        const res = r.nomeRestaurante.toLowerCase().includes(nomeRestaurante)
        return res}
    )

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

module.exports ={
    buscarRestaurante
}