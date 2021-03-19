const axios = require('axios');


exports.displays = (req, res) => {
    // Make a get request to /api/users
    axios.get('https://group-1-treasure.herokuapp.com/location')
        .then(function(response) {
            res.render('displayview', { locations: response.data });
            // console.log(response);
        })
        .catch(err => {
            res.send(err);
        })


}
exports.updateLocation = (req, res) => {
    axios.get('loacalhost:3000/location/edit', { params: { id: req.query.lId } })
        .then(function(locationData) {
            res.render("editview", { locationv: locationData.data })
            console.log(locationData);
        })
        .catch(err => {
            res.send(err);
        })
}