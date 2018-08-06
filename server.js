let express = require('express');
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors');

const app = express();
const userApiRoutes = require('./src/routes/users');

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