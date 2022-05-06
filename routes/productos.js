const express = require('express');
const router = express.Router();
var sqlCon = require('../utils/connection')

const { 
      mostrarProductos,
      seleccionarProductos,
      nuevoProducto, 
      ingresarNuevoProd
     } = require('../controllers/prod');


router.get('/productos', mostrarProductos);
router.get('/productos/:descripcion', seleccionarProductos);
router.get('/', nuevoProducto); 
router.post('/new-product', ingresarNuevoProd); 

module.exports = router;