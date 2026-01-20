const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,

  },
  password: {
    type: String,
    required: true,
  },
 phone: {
    type: Number,
    required: true,
    unique: true, // رقم الهاتف لازم يكون مميز
    min: 10000000, // munimu 8 nmuber for bahrani numbers
    max: 99999999 // maxium 8 nmuber for bahrani numbers
  } ,
  
   role: {
    type: String,
    enum: ['seller', 'buyer'],
    required: true, 
  }
  

});

const User = mongoose.model("User", userSchema);

module.exports = User;
