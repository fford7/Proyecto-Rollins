const express = require('express');
const router = express.Router();
const sqlCon = require('../utils/connection')
const { promise } = require('../utils/connection');



const mostrarProductos = (req, res) => {
    sqlCon.query('SELECT * FROM productos', (err, result) => {
    if (err) {
      console.error(err);
      res.render(error);
    }
    //res.json(result)
    res.render('productos.hbs', { title: 'Express', result });
    
  })
  }

  const seleccionarProductos = function(req, res) {
  
    let prodDesc = req.params.descripcion  
    console.log(prodDesc)
    
    let buscarProd = sqlCon.query(`SELECT * FROM productos 
    WHERE descripcion = '${prodDesc}'`, (err, resultado) => {
      if (err) {
        console.error(err);
        res.render(error);
      }
      console.log(resultado)
      
      res.render('compra', { title: 'Express', resultado });
    })
    
  }
  const nuevoProducto = (req, res) => {
      res.render('new-product')
  }

  const ingresarNuevoProd = (req, res) => {
    const body = req.body;
    if(!body.descripcion) {
      return res.render('error'); 
    }
    sqlCon.query(`insert into productos values 
    (null, '${body.descripcion}', '${body.precio}', '${body.image_url}')`,
      (err, result) => {
        if(err) {
          console.error(error);
          return res.render('error');
        }
        console.log(result)
        res.render('success');
      }
    );
    
  
  }

  module.exports = {
      mostrarProductos,
      seleccionarProductos,
      nuevoProducto, 
      ingresarNuevoProd
                    
    }

    