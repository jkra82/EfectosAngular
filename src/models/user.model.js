const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for AdUnits
let User = new Schema({
  user_name: {
    type: String
  },
  user_country: {
    type: String
  }
},{
    collection: 'users'
});

module.exports = mongoose.model('Users', User);