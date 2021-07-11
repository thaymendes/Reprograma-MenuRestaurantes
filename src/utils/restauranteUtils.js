let filtrarRestaurantePorId = (lista, id) => {
    return lista.find(dado => dado.restauranteId == id)
}

module.exports = {
    filtrarRestaurantePorId
}