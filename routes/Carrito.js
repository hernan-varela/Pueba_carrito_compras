const express = require('express')
const {getUserCarritoById, UpdatedProductCarrito, deletedProductCarrito,postProiductCarrito} = require('../controller/carritoController')

const api = express.Router()

api.get('/carrito', getUserCarritoById)
api.post('/carrito', postProiductCarrito)
api.delete('/carrito', deletedProductCarrito)
api.put('/carrito', UpdatedProductCarrito)

module.exports = api