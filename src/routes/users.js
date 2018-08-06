var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {  
  res.send('Ruta: /api/users/');
});

router.get('/edit', function(req, res, next) {  
  res.send('Ruta: /api/users/get');
});

module.exports = router;