let colorElement = document.getElementById("bgrtwo");
let colorElement1 = document.getElementById("bgrone")
var questLocationName = document.getElementById("lname").getAttribute("value");
var questLocationLat = document.getElementById("llat").getAttribute("value");
var questLocationLong = document.getElementById("llong").getAttribute("value");
var questLocationHint = document.getElementById("lhint").getAttribute("value");
let incrementer = 1;
let distance = 0;

function main() {
    console.log('Page is fully loaded');
    console.log(questLocationName);
    if (incrementer == 1) {
        document.getElementById("ready").innerHTML = "Click to start playing";
        document.getElementById("ready1").innerHTML = " ";
        let utterance = new SpeechSynthesisUtterance("Click to start playing");
        speechSynthesis.speak(utterance);
        document.getElementById("lname").innerHTML = "        ";
    }
    incrementer = 0;
}

window.addEventListener('load', main);
colorElement.addEventListener('click', onClickSquareBox2);
colorElement.addEventListener('touch', onClickSquareBox2);
colorElement1.addEventListener('click', onClickSquareBox1);
colorElement1.addEventListener('touch', onClickSquareBox1);

colorElement1.addEventListener('click', display);
colorElement1.addEventListener('touch', display);


async function onClickSquareBox1() {
    incrementer
    if (incrementer === 1) {
        window.location.reload()
    }
}


function display() {
    if (incrementer === 0) {
        document.getElementById("ready").innerHTML = "The treasure location is ready..! ";
        document.getElementById("ready1").innerHTML = " Start playing the game.";
        console.log("============================", incrementer)
        let utterance = new SpeechSynthesisUtterance(`The treasure location is ready start playing the game.`);
        speechSynthesis.speak(utterance);
        document.getElementById("hint").innerHTML = ("Hint: " + questLocationHint);
        let utterance1 = new SpeechSynthesisUtterance(`Hint:   ${questLocationHint}`);
        speechSynthesis.speak(utterance1);
        incrementer = 1;
    }



}



async function getLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    }).then(position => {
        return position;
    });
}

let currentlat, currentlon, loc, error = true;


async function onClickSquareBox2() {
    if (incrementer == 1) {
        const locText = await getLocation();

        currentlat = locText.coords.latitude;

        document.getElementById("device-lat").innerHTML = ("Current Latitude: " + currentlat.toFixed(9));
        currentlon = locText.coords.longitude;

        document.getElementById("device-long").innerHTML = ("Current Longitude: " + currentlon.toFixed(9));




        if (isInside() == true) {
            // console.log("==========> inside inside")
            document.getElementById("target").innerHTML = questLocationName;
            let utterance = new SpeechSynthesisUtterance(`Congratulations!, You found location ${questLocationName}`);
            speechSynthesis.speak(utterance);
            // console.log(questLocationLat);
            error = false;
        };

        if (error) {
            // console.log("error is here")
            document.getElementById("error").innerHTML = "Sorry,You're not near to the treasure";
            document.getElementById("distance").innerHTML = "Distance to the location:  " + distance + " meters.";

            let utterance = new SpeechSynthesisUtterance("Sorry,You're not near to the treasure");
            speechSynthesis.speak(utterance);
        } else {
            document.getElementById("target1").innerHTML = "";
        }
        // console.log(incrementer, "===================>")

    } else {
        document.getElementById("target").innerHTML = "First click on Box 2";
    }

}

function isInside(questLocationLat, questLocationLong) {
    var questLocationLat = document.getElementById("llat").getAttribute("value");
    var questLocationLong = document.getElementById("llong").getAttribute("value");
    // console.log(questLocationLat);
    distance = distanceBetweenLocations(currentlat, currentlon, questLocationLat, questLocationLong) * 1609.34;
    console.log("distance: " + distance);
    // console.log("quest lat " + questLocationLat);


    if (distance < 30) {
        return true;
    } else {
        return false;
    }
}

function distanceBetweenLocations(currentlat, currentlon, questLocatiionLat, questLocationLong) {
    var p = 0.017453292519943295;
    // console.log(currentlat, currentlon, questLocatiionLat, questLocationLong)
    var a = 0.5 - Math.cos((questLocatiionLat - currentlat) * p) / 2 +
        Math.cos(currentlat * p) * Math.cos(questLocatiionLat * p) *
        (1 - Math.cos((questLocationLong - currentlon) * p)) / 2;
    // console.log("================>");
    var result = 12742 * Math.asin(Math.sqrt(a));
    // console.log(result)

    return result;

}