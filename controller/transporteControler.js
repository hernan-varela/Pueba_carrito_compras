const Transporte = require("../DataBase/models/transporte");

const addTransporte = async (req, res) => {
  const { asientos, price, numero, description, image } = req.body;
  const transporte = Transporte({
    asientos,
    price,
    numero,
    description,
    image
  });

  await transporte.save();
  res.send(transporte);
};

const getAllTransporte= async(req,res)=>{
    try {
        const response = await Transporte.find()
        res.send(response)
        
    } catch (error) {
        console.log(error)
    }
}


const deleteTransporte = async(req, res) => {
    try {
        const {_id} = req.body

        if(!_id) res.status(501).send({error : 'es necesario el id para poder eliminar un trasporte'})
        else{
            const transportDeleted = await Transporte.findByIdAndDelete(_id)
            res.status(200).send({message : `El transporte numero :  ${transportDeleted.numero} a sido eliminado`})
        }
    
    } catch (error) {
        res.status(501).send({error : error.message})
    }
}

module.exports = {
  addTransporte,
  getAllTransporte,
  deleteTransporte
};
