const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  price: {
    type: Number,
    required: true,
    min: 1, // minimum price
    max: 10000 // maximum price
  },
  stock: {
    type: Number,
    required: true,
    min: 0 // can't be less than 0
  },
  category: {
    type: String,
    enum: ['Smart Switch', 'Smart Lights', 'Smart Camera', 'Smart Plugs', 'Other'], // our categories
    required: true
  },
  description: {
    type: String,
    maxlength: 500 // description limit
  },
  username: {
    type: String,
    required: true // to identify the seller
  },
  phone: {
    type: Number,
    required: true // seller's phone number
      }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);