const express = require('express');
const api = express.Router();
const Model = require('../models/location');
let bodyParser = require('body-parser');
const cons = require('consolidate');

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));



exports.create = (req, res) => {
    const location = new Model({
        _id: req.body._id,
        name: req.body.name,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
    });
    location.save(err => {
        // res.send({ status: 200, response: "Location Table is created successfully" });
        res.redirect('/location/display');
        // res.send('localhost:3000/display');

    })

}

exports.delete = (req, res) => {
    const id = req.params.id;


    console.log(id)
    Model.findByIdAndRemove(id)
        .then(data => {
            console.log(id, '=======>id');

            if (!data) {
                res.status(404).send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` })
            } else {
                res.redirect('/location/display')
                    // res.send({
                    //     message: "User was deleted successfully!"
                    // })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + _id
            });
        });
}



// GET ALL  Data from Mongo
exports.findall = (req, res) => {
    Model.find()
        .then(location => {
            // res.send(data)
            // res.redirect('display');
            // console.log(location.toJSON(), "===> location")
            res.send(location);
        });
}

// exports.findbyid = (req, res) => {
// Model.findById(req.params.lId)
//     .then(locations => {
//         if (!locations) {
//             return res.status(404).send({
//                 message: "Location not found with id " + req.params.lId
//             });
//         }
//         res.send(locations);
//     }).catch(err => {
//         if (err.kind === 'ObjectId') {
//             return res.status(404).send({
//                 message: "location not found with id " + req.params.lId
//             });
//         }
//         return res.status(500).send({
//             message: "Something wrong retrieving location with id " + req.params.lId
//         });
//     });
// }

exports.edit = (req, res) => {

    console.log(req.body, "=====> UPDATE DATA")

    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Data to update can not be empty" })
    }

    const id = req.params.id;

    Model.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Update user with ${id}. Maybe user not found!` })
            } else {
                // res.send(data)
                res.redirect('/location/display')

            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error Update user information" })
        })


}



// Find and update locations 
// Model.findByIdAndUpdate(req.params.lId, {
//         lId: req.body.lId,
//     }, { new: true })
//     .then(location => {

//         if (!location) {
//             return res.status(404).send({
//                 message: "LocationId not found with id " + req.params.lId
//             });
//         }
//         res.send(location);
//     }).catch(err => {
//         if (err.kind === 'ObjectId') {
//             return res.status(404).send({
//                 message: "Product not found with id " + req.params.lId
//             });
//         }
//         return res.status(500).send({
//             message: "Something wrong updating note with id " + req.params.lId
//         });
//     });