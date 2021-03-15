const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
 
  name: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: true,
    unique: false,
  },
  
  longitude: {
    type:Number,
    required: true,
    
  },
  latitude: {
    type: Number,
    required: true,
  },
 
});
module.exports = mongoose.model('Location', LocationSchema);