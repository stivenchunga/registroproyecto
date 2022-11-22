
const { Schema, model } = require('mongoose');


const ProjectSchema = Schema({
    nombre: {
        type: String,
    },
    descripcion: {
        type: String
    },
    cities : {
        type : String,
    }
    
});


module.exports = model('Project', ProjectSchema)
