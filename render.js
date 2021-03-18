const axios = require('axios');


exports.displays = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/location')
        .then(function(response){
            res.render('displayview', { locations : response.data });
            console.log(response);
        })
        .catch(err =>{
            res.send(err);
        })

    
}