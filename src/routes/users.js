var express = require('express');
var router = express.Router();

let User = require('../models/user.model');

router.post('/add', function(req, res, next) {  
  //res.send('Ruta: /api/users/');

  let user = new User(req.body);
  user.save()
    .then(game => {
      res.status(200).json({'User': 'User in added successfully'});
    })
    .catch(err => {
      res.status(400).send("Unable to save to database");
    });

});

router.get('edit/:id', function(req, res, next) {  
  //res.send('Ruta: /api/users/:id');

  let id = req.params.id;
  User.findById(id, function (err, user){
      res.json(user);
  });
});

router.post('update/:id', function(req, res, next) {  
  //res.send('Ruta: /api/users/:id');

  User.findById(req.params.id, function(err, user) {
    if (!user)
      return next(new Error('Could not load User'));
    else {
      user.user_name = req.body.user_name;
      user.user_country = req.body.user_country;

      user.save().then(adUnit => {
          res.json('User update complete');
      })
      .catch(err => {
            res.status(400).send("Unable to update the database");
      });
    }
  });
});

router.get('/delete/:id', function(req, res, next) {  
  //res.send('Ruta: /api/users/post/:id');
  var condition = { _id: req.params.id };
  User.deleteOne(condition, function (err, obj){
    if (err) {
      res.status(400).send("Unable to delete the User");
    }
    else {

    }
  })

  User.find(function (err, users){
    if(err){
      console.log(err);
    }
    else {
      res.json(users);
    }
  });
});

router.get('/', function(req, res, next) {  
  //res.send('Ruta: /api/users/post/:id');

  User.find(function (err, users){
    if(err){
      console.log(err);
    }
    else {
      res.json(users);
    }
  });
});

module.exports = router;