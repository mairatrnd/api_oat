const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mairatrnd:123456123@apioat.1vhw3zp.mongodb.net/api_oat?retryWrites=true&w=majority", {}, (error) =>{
    if(error){
        console.log('Falha ao autenticar com o mongodb');
        console.log(error);
        return;
    }

    console.log('Conexão com mongodb estável');
})

mongoose.Promise = global.Promise;

module.exports = mongoose;