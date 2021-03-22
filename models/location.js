const mongoose = require('mongoose');
const autoIncrement = require("mongoose-auto-increment");

const LocationSchema = new mongoose.Schema({


    name: {
        type: String,
        minlength: 2,
        maxlength: 100,
        // required: true,
        unique: false,
    },

    longitude: {
        type: Number,
        // required: true,

    },
    latitude: {
        type: Number,
        // required: true,   
    }


});
// autoIncrement.initialize(mongoose.connection);
// LocationSchema.plugin(autoIncrement.plugin, {
//     model: "location", // collection or table name in which you want to apply auto increment
//     field: "_id", // field of model which you want to auto increment
//     startAt: 1, // start your auto increment value from 1
//     incrementBy: 1, // incremented by 1
// });
// autoIncrement.initialize(mongoose.connection); // 3. initialize autoIncrement 

// LocationSchema.plugin(autoIncrement.plugin, 'location');

module.exports = mongoose.model("location", LocationSchema)