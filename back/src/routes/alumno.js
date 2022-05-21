const router = require('express').Router();

const alumnoController = require('../controllers/alumnoController');

router.get('/', alumnoController.list);
router.post('/add', alumnoController.save);
router.get('/update/:id_alumno', alumnoController.edit);
router.post('/update/:id_alumno', alumnoController.update);
router.get('/delete/:id_alumno', alumnoController.delete);

module.exports = router;