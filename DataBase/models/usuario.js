const mongoose = require("mongoose")

const usuarioSchema = new mongoose.Schema({
    name : {type : String, required : true},
    email : {type : String, required : true},
    password : {type : String, required : true},
    isAdmin : {type : String, required : true}
})


const Usuario = mongoose.model('Usuario', usuarioSchema)

module.exports = Usuario