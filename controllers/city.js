const City = require("../models/city");


const getCities = async (req, res = response)=>{
     
    const cities = await City.find();

    res.json({
        cities
    })    
}

const getCity = async (req, res = response)=>{
    
    const { id } = req.params;
    
    const dataCity = City.findById(id);

    res.json({
        dataCity
    })

}

const postCitie = async (req, res = response)=>{

    const { ...data} = req.body;
   

    const cityDB = new City(data);

    if(!cityDB.ciudades){
        return res.status(400).json({
            msg: 'no date'
        })
    }

    cityDB.save();

    res.json({
        cityDB
    })

}

module.exports = {
    getCities,
    postCitie,
    getCity
}