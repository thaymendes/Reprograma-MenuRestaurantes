const pratosJson = require("../model/itensMenu.json")
const utils = require("../utils/itensUtils")

const buscarTodos = (request, response) => {
    response.status(200).send(pratosJson)
}

const buscaId = (request, response) => {
    const itemId = request.params.itemId
    const pratos = utils.filtrarPratosPorId(pratosJson, itemId)

    if (pratos == "" || pratos == undefined) {
        response.status(404).json({
            "error": 404,
            "mensagem": "Prato não encontrado!"
        })
    } else {
        response.status(200).send(pratos)
    }
}

const criarPrato = (request, response) => {
    const menuId = request.body.menuId
    const categoriaItem = request.body.categoriaItem
    const nome = request.body.nome
    const valorItem = request.body.valorItem
    const novoPrato = {
        itemId: Math.random().toString(32).substr(2, 9),
        menuId: menuId,
        categoriaItem: categoriaItem,
        nome: nome,
        valorItem: valorItem
    }
    pratosJson.push(novoPrato)
    response.status(201).json([{
        novoPrato,
        "mensagem": "Prato adicionado com sucesso!",
        
    }])
}
const deletarPrato = (request, response) => {
    const itemId = request.params.itemId
    const menus = utils.filtrarPratosPorId(pratosJson, itemId)
    const indice = pratosJson.indexOf(menus)
    pratosJson.splice(indice, 1)

    response.status(200).json([{
        pratosJson,
        "mensagem": "Prato deletado com sucesso",
       
    }])
}
const substituirPrato = (request, response) => {
    const itemId = request.params.itemId
    let conteudo = request.body
    const pratoFiltrado = utils.filtrarPratosPorId(pratosJson, itemId)
    if (pratoFiltrado == "" || pratoFiltrado == undefined) {
        response.status(404).json({
            "mensagem": "Id não encontrado!"
        })
    } else {
        let pratoAtualizado = {
            itemId: pratoFiltrado.itemId,
            menuId: conteudo.menuId,
            categoriaItem: conteudo.categoriaItem,
            nome: conteudo.nome,
            valorItem: conteudo.valorItem,
            
        }
        const indice = pratosJson.indexOf(pratoFiltrado)
        pratosJson.splice(indice, 1, pratoAtualizado)

        response.status(200).json([{
            pratoAtualizado,
            "mensagem": "Prato SUBSTITUÍDO com êxito"

        }]);
    }
}

const atualizarPrato = (request, response) => {

    const itemId = request.params.itemId
    let atualizacaoConteudo = request.body
    const pratoFiltrado = utils.filtrarPratosPorId(pratosJson, itemId)
    if (pratoFiltrado == "" || pratoFiltrado == undefined) {
        response.status(404).json({
            "mensagem": "Id não encontrado!"
        })
    } else {
        let listaDeChaves = Object.keys(atualizacaoConteudo)

        listaDeChaves.forEach((chave) => {
            pratoFiltrado[chave] = atualizacaoConteudo[chave]
        })

        response.status(200).json([{
            pratoFiltrado,
            "mansagem": "Prato ATUALIZADO com êxito!"
            
        }])
    }
}

const buscarNome = (request, response) => {
    const nomePrato = request.query.nome.toLowerCase()
    const pratos = pratosJson.find(pratos => pratos.nome.toLowerCase().includes(nomePrato))

    if (nomePrato == "" || nomePrato == undefined) {
        response.status(400).json({
            "mensagem": "Digite um nome de prato válido!"
        })
    } else {
        response.status(200).send(pratos)
    }
}


module.exports = {
    buscarTodos,
    buscaId,
    criarPrato,
    deletarPrato,
    substituirPrato,
    atualizarPrato,
    buscarNome
}