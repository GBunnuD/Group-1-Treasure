const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require("mongoose");
const engines = require('consolidate');
const expressLayouts = require('express-ejs-layouts');
const port = process.env.PORT || 3001
require('dotenv').config({ path: 'ENV_FILENAME' });
// var $ = jQuery;



// env variables
const hostname = process.env.HOSTNAME;
const isProduction = process.env.NODE_ENV === 'production';

const app = express();

var http = require('http');



const vars = dotenv.config({ path: '.env' });
if (vars.error) {
    throw vars.error;
}

app.use(express.static('public'));

app.use(helmet());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('ejs', engines.ejs);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



// app.use(expressLayouts);




// $("#locations").submit(function(event) {
//     alert("Data Inserted Successfully!");
// })

// $("#update_user").submit(function(event) {
//     event.preventDefault();

//     var unindexed_array = $(this).serializeArray();
//     var data = {}

//     $.map(unindexed_array, function(n, i) {
//         data[n['name']] = n['value']
//     })


//     var request = {
//         "url": `http://localhost:3000/api/users/${data.id}`,
//         "method": "PUT",
//         "data": data
//     }

//     $.ajax(request).done(function(response) {
//         alert("Data Updated Successfully!");
//     })

// })

// if (window.location.pathname == "/") {
//     $ondelete = $(".table tbody td a.delete");
//     $ondelete.click(function() {
//         var id = $(this).attr("data-id")

//         var request = {
//             "url": `http://localhost:3000/api/users/${id}`,
//             "method": "DELETE"
//         }

//         if (confirm("Do you really want to delete this record?")) {
//             $.ajax(request).done(function(response) {
//                 alert("Data Deleted Successfully!");
//                 location.reload();
//             })
//         }

//     })
// }



// Use Express middleware to configure routing
const routing = require('./routes/router.js');

app.set('view engine', 'ejs')
app.engine('ejs', engines.ejs)
app.set('views', path.join(__dirname, './views/'))
app.set('view engine', 'ejs')
app.engine('ejs', engines.ejs)

const router = require('./routes/router')
app.use('/', router)
app.use(bodyParser.json({ type: "application/*+json" }));

app.use(express.static(__dirname + '/public/'));

mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then((res) => {
    app.listen(port, function() {
        return "Connected to Database"
    })
}).catch((e) => {
    console.log(e, "--error")
})