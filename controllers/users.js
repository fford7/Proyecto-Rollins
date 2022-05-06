const express = require('express');
const router = express.Router();
const sqlCon = require('../utils/connection')

const mostrarUsuarios = (req, res) => {
    sqlCon.query('SELECT * FROM usuarios', (err, result) => {
        if (err) {
            console.error(err);
            res.render(error);
        }
        res.render('usuarios.hbs', { title: 'Express', result })
    })
}

const nuevoUsuario = (req, res) => {
    res.render('new-user.hbs');
}

const cargarNuevoUsuario = (req, res) => {
    const body = req.body;
    if (!body.email) {
        return res.render('error');
    }
    sqlCon.query(`insert into usuarios values 
    (null, '${body.email}', '${body.contraseña}')`,
        (err, result) => {
            if (err) {
                console.error(error);
                return res.render('error');
            }
            console.log(result)
            res.render('success');
        }
    );
}

const login = (req, res) => {
    res.render('login.hbs');
}

const cargarLogin = (req, res) => {
    const body = req.body;
    sqlCon.query(
        `SELECT email, contraseña FROM usuarios 
              WHERE email = '${body.email}' AND contraseña = '${body.contraseña}'`,
        (error, result) => {
            if (error) {
                console.error(error);
                res.render('error');
            }
            if (result.length > 0) {
                return res.render('index');
            } else {
                return res.json({ message: 'Usuario o contraseña incorrecta' });
            }
        })
}

module.exports = {
    mostrarUsuarios,
    nuevoUsuario,
    cargarNuevoUsuario,
    login,
    cargarLogin
}