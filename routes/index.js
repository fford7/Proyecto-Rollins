var express = require('express');
const { login } = require('../controllers/users');
var router = express.Router();
var sqlCon = require('../utils/connection')


/* GET home page. */
router.get('/', function(req, res) {
    
    res.render('index.hbs', { title: 'Rollins Music' });
    
  
  });
 






module.exports = router;
