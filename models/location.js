const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
 
  name: {
    type: String,
    minlength: 2,
    maxlength: 100,
    // required: true,
    unique: false,
  },
  
 
 
});

module.exports = mongoose.model("location", LocationSchema)


