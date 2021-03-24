const axios = require('axios');
const cons = require('consolidate');
const Model = require('./models/location');

exports.displays = (req, res) => {
    // Make a get request to /api/users
    axios.get('https://group-1-treasure.herokuapp.com/location')
        .then(function(response) {
            res.render('displayview', { locations: response.data });
            // console.log(JSON.stringify(response), "==> responssss");
            // console.log(response);
        })
        .catch(err => {
            res.send(err);
        })
}






exports.addlocation = (req, res) => {
        res.render('create');
    }
    // exports.update_user = (req, res) =>{
    //     axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
    //         .then(function(userdata){
    //             res.render("update_user", { user : userdata.data})
    //         })
    //         .catch(err =>{
    //             res.send(err);
    //         })
    // }

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