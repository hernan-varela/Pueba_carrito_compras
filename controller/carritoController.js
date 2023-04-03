
const { default: mongoose } = require('mongoose')
const Carrito = require('../DataBase/models/carrito')

const getUserCarritoById = async (req, res) => {
    try {
        const user_id = req.session.user_id
    if(!user_id) res.status(501).send( { error : 'debe estar logueado para poder lod productos nde tu carrito'} )
    else{
        //aca se hace el enlace entre el usuario y los productos
       const filtarCarrito = await Carrito.aggregate([
         { $match: { user_id: new mongoose.Types.ObjectId(user_id) } }, // el primer User id es de el modelo carrito, el segundo del usuario logueado, aca se filtra es decir se queda solo con el carrito de la persona logueada

         {
           $lookup: {
             //aca se hace la union en las tablas
             from: "Usuario", // ahora el carrito de ese usuario se enlaza con el transporte y se ve la info que tiene dentro
             localField: "user_id", // se enlaza teniendo en cuenta esta propiedad local(carrito)
             foreignField: "_id", //aca va la id que esta en el modelo transporte, se unen por este elemento
             as: "transport",
           }
          },

          { $unwind: "$transport" }, //esto es para que el producto no se vea como array sino como objeto

          {
              $project:{
                _id: 1, transport_id :1,
                Transport:{ asientos: 1,
                  price : 1,
                 numero: 1,
                  description: 1,
                   image: 1 }  // mostramos los campos que queremos ver
              }
          }
       ]);

        res.send({filtarCarrito})
    }
    } catch (error) {
        res.status(509).send({error : error.message})
    }
}

const UpdatedProductCarrito = async (req, res) =>{

}

const deletedProductCarrito = async (req, res) =>{
    
}

const postProiductCarrito = async (req, res) =>{
    try {
        const user_id = req.session.user_id  //user_id aca hay que traer la sesion del usuario
        console.log(user_id)
        const{ transport_id} = req.body
        if(!user_id) res.status(501).send( { error : 'debe estar logueado para poder agregar productos al carrito'} )
        else if(!transport_id) res.status(501).send({ error : 'el id del transpoprte  es necesario para poder agregar un poroducto al carrito'})
        else{
            const transportIncart = Carrito({user_id, transport_id})
            await transportIncart.save()
            res.status(200).send({
                message : 'el producto se agrego exitosamente a tu carrito de compras',
                transport : transportIncart
            })
        }
    } catch (error) {
        res.status(500).send({error : error.message})
    }
}

module.exports = {
    getUserCarritoById,
    UpdatedProductCarrito,
    deletedProductCarrito,
    postProiductCarrito

}