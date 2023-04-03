const express = require("express");
const{addTransporte,getAllTransporte,deleteTransporte} = require('../controller/transporteControler') 

const api = express.Router()


api.post('/transporte', addTransporte),
api.get('/transporte', getAllTransporte)
api.delete('/transporte', deleteTransporte)
// api.put('/transporte', )


module.exports = api