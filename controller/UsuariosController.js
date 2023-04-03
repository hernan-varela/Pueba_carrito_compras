const Usuario = require('../DataBase/models/usuario')


const addUsuario = async(req, res) => {
    try {
        const { name,email,password,isAdmin } = req.body

        if( !name || !email || !password || !isAdmin ) {
            res.status(501).send({error : 'Complete todos los campos antes de continuar'})
        }else{
            const usuario = Usuario({name, email, password, isAdmin})
            const usuarioStored = await usuario.save()
            res.status(200).send(usuarioStored)
        }
    } catch (error) {
        res.status(500).send({error : error.message})
    }
}


const updateUsuario = async(req, res) => {

}


const deleteUsuario = async(req, res) => {
 try {
    const {_id} = req.body 
    if(!_id){
        res.status(409).send({error : 'es necesario el id del usuario para poder eliminarlo' })
    }else{
        const userDeleted = await Usuario.findByIdAndDelete(_id)
        res.status(202).send({message : `El usuario ${userDeleted.name} ah sido eliminado de la base de datos`})
    }
 } catch (error) {
    res.tatus(501).send({error : error.message})
 }
}


const getAllUsuario = async(req, res) => {
    try {
        const usuario = await Usuario.find({},{password : 0})
        res.status(200).send(usuario)
    } catch (error) {
        res.status(401).send({eror : error.message})
    }
}


const loginUser = async (req, res) =>{
    const{email, password} = req.body
    if( !email ) res.status(501).send({error : 'el campo email es obligatorio'})
    else if (!password) res.status(501).send({error : 'el campo password es obligatorio'})
    else{
      const userIsLoged = await Usuario.find({ email: email, password : password})  // busco si el usuario esta logeado
        
      if(userIsLoged[0]) {

        req.session.user_id = userIsLoged[0]._id
        res.status(200).send({
            user : userIsLoged,
            message : 'bienvenido'
         })
      }

   
      else{
        res.status(501).send('es necesario estar logueado para continuar')
      }
    }
}

module.exports = {
    addUsuario,
    updateUsuario,
    deleteUsuario,
    getAllUsuario, 
    loginUser
}