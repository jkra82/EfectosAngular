let express = require('express');
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  config = require('./src/config/bd');

const app = express();
const userApiRoutes = require('./src/routes/users');

mongoose.Promise = global.Promise;
mongoose.connect(config.bd).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.get('/', function (req, res) {
  res.send('Raíz');
});
app.use('/api/users/', userApiRoutes);

var server = app.listen(port, function(){
    console.log('Listening on port ' + port);
});