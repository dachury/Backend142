const mongoose = require ('mongoose');

//El modelo es el que se va a montar en postman

const empleadoSchema = mongoose.Schema({

    nombres:{
        type: String,
        required: true
    },
    apellidos:{
        type: String,
        required: true
    },
    documento:{
        type: Number,
        required: true
    },
    correo:{
        type: String,
        required: true
    },
    teléfono:{
        type: Number,
        required: true
    },
    dirección:{
        type: String,
        required: true
    },

},{versionkey:false});

module.exports = mongoose.model('Empleado', empleadoSchema);