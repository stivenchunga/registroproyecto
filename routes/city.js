const { Router } = require('express');
const { getCities , postCitie, getCity} = require('../controllers/city');



const router = Router();

router.get('/',getCities);

router.get('/:id',getCity)

router.post('/', postCitie);

module.exports = router;