var express = require('express');
const { login } = require('../controllers/users');
var router = express.Router();
var sqlCon = require('../utils/connection')


/* GET home page. */
router.get('/', function(req, res) {
    
    res.render('index.hbs', { title: 'Express' });
    
  
  });
 






module.exports = router;
