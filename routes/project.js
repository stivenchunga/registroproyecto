const { Router } = require('express');
const { getProjects, postProjects, putProjects, } = require('../controllers/projects');

const router = Router();

router.get('/',getProjects);

router.post('/', postProjects);

router.put('/:id',putProjects)


module.exports = router;