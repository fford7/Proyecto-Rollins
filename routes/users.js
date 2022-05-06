const express = require('express');
const router = express.Router();
const sqlCon = require('../utils/connection');

const { 
    mostrarUsuarios,
    nuevoUsuario,
    cargarNuevoUsuario,
    login,
    cargarLogin
       } = require('../controllers/users');

router.get('/usuarios', mostrarUsuarios);
router.get('/new-user', nuevoUsuario) 
router.post('/new-user', cargarNuevoUsuario) 
router.get('/login', login )
router.post('/login', cargarLogin)


module.exports = router;