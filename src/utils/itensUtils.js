let filtrarPratosPorId = (lista, id) =>{
    return lista.find(dado => dado.itemId == id)
}

module.exports= {
    filtrarPratosPorId
}