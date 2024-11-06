const mongoose = require('mongoose');

module.exports = mongoose.model('User', {
   name : String,
   email :String,
   age: Number,
   country:String
});
