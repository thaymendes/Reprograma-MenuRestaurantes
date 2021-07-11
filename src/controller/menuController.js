const menuJson = require("../model/menu.json")
const utils = require("../utils/menuUtils")


const buscarTodos = (request, response) => {
    response.status(200).send(menuJson)
}

const buscaId = (request, response) => {
    const menuId = request.params.menuId
    const menus = utils.filtrarMenuPorId(menuJson, menuId)

    if (menus == "" || menus == undefined) {
        response.status(404).json({
            "error": 404,
            "mensagem": "Menu não encontrado!"
        })
    } else {
        response.status(200).send(menus)
    }
}

const criarMenu = (request, response) => {
    const tituloMenu = request.body.tituloMenu
    const restauranteId = request.body.restauranteId
    const novoMenu = {
        menuId: Math.random().toString(32).substr(2, 9),
        tituloMenu: tituloMenu,
        restauranteId: restauranteId
    }
    menuJson.push(novoMenu)
    response.status(201).json([{
        novoMenu,
        "mensagem": "Menu adicionado com sucesso!"
       
    }])
}

const deletarMenu = (request, response) => {
    const menuId = request.params.menuId
    const menus = utils.filtrarMenuPorId(menuJson, menuId)
    const indice = menuJson.indexOf(menus)
    menuJson.splice(indice, 1)

    response.status(200).json([{
        menuJson,
        "mensagem": "Menu deletado com sucesso",
       
    }])
}
const substituirMenu = (request, response) => {
    const menuId = request.params.menuId
    let conteudo = request.body
    const menuFiltrado = utils.filtrarMenuPorId(menuJson, menuId)
    if (menuFiltrado == "" || menuFiltrado == undefined) {
        response.status(404).json({
            "mensagem": "Id não encontrado!"
        })
    } else {
        let menuAtualizado = {
            menuId: menuFiltrado.menuId,
            restauranteId: conteudo.restauranteId,
            tituloMenu: conteudo.tituloMenu
        }
        const indice = menuJson.indexOf(menuFiltrado)
        menuJson.splice(indice, 1, menuAtualizado)

        response.status(200).json([{
            menuAtualizado,
            "mensagem": "Menu SUBSTITUÍDO com êxito"

        }]);
    }
}
const atualizarMenu = (request, response) => {

    const menuId = request.params.menuId
    let atualizacaoConteudo = request.body
    const menuFiltrado = utils.filtrarMenuPorId(menuJson, menuId)
    if (menuFiltrado == "" || menuFiltrado == undefined) {
        response.status(404).json({
            "mensagem": "Id não encontrado!"
        })
    } else {
        let listaDeChaves = Object.keys(atualizacaoConteudo)

        listaDeChaves.forEach((chave) => {
            menuFiltrado[chave] = atualizacaoConteudo[chave]
        })

        response.status(200).json([{
            menuFiltrado,
            "mansagem": "Restaurante ATUALIZADO com êxito!"
           
        }])
    }
}



module.exports = {
    buscarTodos,
    buscaId,
    criarMenu,
    deletarMenu,
    substituirMenu,
    atualizarMenu
}