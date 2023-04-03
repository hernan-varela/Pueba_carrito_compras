const express = require("express");
const {
    addUsuario, 
    updateUsuario,
    getAllUsuario,
    deleteUsuario,
    loginUser
} = require('../controller/UsuariosController')


const api = express.Router()


api.post('/usuario', addUsuario),
api.get('/usuario', updateUsuario)
api.delete('/usuario', getAllUsuario)
api.put('/usuario', deleteUsuario)
api.post('/usuario/login', loginUser)



module.exports = api