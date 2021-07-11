const restauranteJson = require("../model/restaurantes.json")
const utils = require("../utils/restauranteUtils")

const buscarTodos = (request, response) => {
    response.status(200).send(restauranteJson)
}

const buscaId = (request, response) => {
    const restauranteId = request.params.restauranteId
    const restaurantes = utils.filtrarRestaurantePorId(restauranteJson, restauranteId)

    if (restaurantes == "" || restaurantes == undefined) {
        response.status(404).json({
            "error": 404,
            "mensagem": "Restaurante não encontrado!"
        })

    } else {
        response.status(200).send(restaurantes)
    }
}

const buscarNome = (request, response) => {
    const nomeRestaurante = request.query.nome.toLowerCase()
    
    const restaurantes = restauranteJson.filter( r => {
        const res = r.nomeRestaurante.toLowerCase().includes(nomeRestaurante)
        return res}
    )

    if (restaurantes == "" || restaurantes == undefined ) {
        response.status(400).json({
            "mensagem": "Digite um nome de restaurante válido!"
        })
    } else {
        response.status(200).send(restaurantes)
    }
}


const criarRestaurante = (request, response) => {
    const nomeRestaurante = request.body.nomeRestaurante
    const hrFuncionamento = request.body.horarioFuncionamento
    const diasFuncionamento = request.body.diasFuncionamento
    const localizacao = request.body.localizacao
    const pagamento = request.body.formasPagamento
    const novoRestaurante = {
        restauranteId: Math.random().toString(32).substr(2, 9),
        nomeRestaurante: nomeRestaurante,
        horarioFuncionamento: hrFuncionamento,
        diasFuncionamento: diasFuncionamento,
        localizacao: localizacao,
        formasPagamento: pagamento
    }
    restauranteJson.push(novoRestaurante)
    response.status(201).json([{
        novoRestaurante,
        "mensagem": "Restaurante adicionado com sucesso!"
       
    }])
}

const deletarRestaurante = (request, response) => {
    const restauranteId = request.params.restauranteId
    const restaurante = restauranteJson.find(restaurante => restaurante.restauranteId == restauranteId)

    const indice = restauranteJson.indexOf(restaurante)
    restauranteJson.splice(indice, 1)

    response.status(200).json([{
        restauranteJson,
        "mensagem": "Restaurante deletado com sucesso"
       
    }])
}

const substituirRestaurante = (request, response) => {
    const restauranteId = request.params.restauranteId
    let conteudo = request.body
    const restauranteFiltrado = utils.filtrarRestaurantePorId(restauranteJson, restauranteId)
    if (restauranteFiltrado == "" || restauranteFiltrado == undefined) {
        response.status(404).json({
            "mensagem": "Id não encontrado!"
        })
    } else {
        let restauranteAtualizado = {
            restauranteId: restauranteFiltrado.restauranteId,
            nomeRestaurante: conteudo.nomeRestaurante,
            horarioFuncionamento: conteudo.horarioFuncionamento,
            diasFuncionamento: conteudo.diasFuncionamento,
            localizacao: conteudo.localizacao,
            formasPagamento: conteudo.formasPagamento
        }
        const indice = restauranteJson.indexOf(restauranteFiltrado)
        restauranteJson.splice(indice, 1, restauranteAtualizado)
        /*
        */

        response.status(200).json([{
            "mensagem": "Restaurante SUBSTITUÍDO com êxito",
            restauranteAtualizado
        }]);
    }
}
const atualizarRestaurante = (request, response) => {

    const restauranteId = request.params.restauranteId
    const restauranteFiltrado = utils.filtrarRestaurantePorId(restauranteJson, restauranteId)
    const atualizacaoConteudo = request.body
    if (restauranteFiltrado == "" || restauranteFiltrado == undefined) {
        response.status(404).json({
            "mensagem": "Id não encontrado!"
        })
    } else {

        let listaDeChaves = Object.keys(atualizacaoConteudo)

        listaDeChaves.forEach((chave) => {
            restauranteFiltrado[chave] = atualizacaoConteudo[chave]
        })

        response.status(200).json([{
            "mansagem": "Restaurante ATUALIZADO com êxito!",
            restauranteFiltrado
        }])
    }
}



module.exports = {
    buscarTodos,
    buscaId,
    criarRestaurante,
    deletarRestaurante,
    buscarNome,
    substituirRestaurante,
    atualizarRestaurante

}