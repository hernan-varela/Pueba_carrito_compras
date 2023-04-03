const mongoose = require('mongoose')

mongoose.connection.on('open', () => console.log('Data base connected. '))

const connect_db = async ( {port, host, name} ) =>{
    
    const uri = `mongodb://${host}:${port}/${name}`
    await mongoose.connect(uri, {useNewUrlParser : true})
}

module.exports = connect_db