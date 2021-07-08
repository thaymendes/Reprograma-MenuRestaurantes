const filmes = require ("../model/filmes.json")

const getAll = (request, response) => {
    console.log("passou aqui getall")
    response.status(200).send(filmes)

}
const getById = (request, response) => {
        const idRequerido = request.params.id
        let idFiltrado = filmes.find(filme => filme.id == idRequerido)
    
        if(idFiltrado == undefined || idRequerido == " "){
            response.status(404).json([{
                "mensagem":"id não existente"
            }])
        }else{
            response.status(200).json(idFiltrado)       
        } 
}

module.exports = { //exportando as funções
    getAll,
    getById     
}