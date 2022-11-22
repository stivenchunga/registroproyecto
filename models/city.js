
const { Schema, model } = require('mongoose');


const CitySchema = Schema({
    ciudades: {
        type: String,
    }
});


module.exports = model('City', CitySchema)
