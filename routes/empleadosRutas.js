const express = require('express');
const router = express.Router();
const empleadoController = require ('../controllers/empleadoController');

//rutas del crud

router.post('/',empleadoController.agregarEmpleados);
router.get('/',empleadoController.mostrarEmpleados);
router.get('/:id', empleadoController.BuscarEmpleado);
//router.put('/:id', clienteController.modificarClientes);
router.patch('/:id', empleadoController.editarEmpleados);
router.delete('/:id', empleadoController.eliminarEmpleados);

module.exports = router;
