var express = require('express');
var router = express.Router();
const usuarios = require('./v1/users/router')


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.use('/api/v1/clinica/',usuarios /*Aqui poner las otras rutas */)

module.exports = router;
