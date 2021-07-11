let filtrarMenuPorId = (lista, id) =>{
    return lista.find(dado => dado.menuId == id)
}

module.exports= {
    filtrarMenuPorId
}