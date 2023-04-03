const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CarritoSchema = Schema({
  user_id : {type : mongoose.Schema.Types.ObjectId, ref : 'Usuario'},  // aca hace la conexion usuario con carrito
  transport_id : {type : mongoose.Types.ObjectId, ref : 'Transport'},
  asientosComprados : {Ttype : Number}
});

const carrito = mongoose.model('carrito', CarritoSchema)

module.exports = carrito