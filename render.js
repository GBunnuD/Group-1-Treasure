const axios = require('axios');
const cons = require('consolidate');
const Model = require('./models/location');

exports.displays = (req, res) => {
    // Make a get request to /api/users
    axios.get('https://group-1-treasure.herokuapp.com/location')
        .then(function(response) {
            res.render('displayview', { locations: response.data });

        })
        .catch(err => {
            res.send(err);
        })
}






exports.addlocation = (req, res) => {
    res.render('create');
}


exports.editLocation = (req, res) => {

    const locationId = req.params.locationId;

    console.log(locationId, "====> INSIDE EDIT LOCATION")

    Model.findById(locationId)
        .then(locations => {
            console.log(locations, "=====> location found")

            res.render('editview', { locations })
        }).catch((err) => {
            console.log(err, "==> error while getting")
        });

}
exports.deletelocation = (req, res) => {

    const locationId = req.params.locationId;

    console.log(locationId, "====> INSIDE EDIT LOCATION")

    Model.findById(locationId)
        .then(locations => {
            console.log(locations, "=====> location found")

        }).catch((err) => {
            console.log(err, "==> error while getting")
        });

}