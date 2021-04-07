// let device, location;
let colorElement = document.getElementById("bgrtwo");
let colorElement1 = document.getElementById("status");
let incrementer = 0;

function main() {
    console.log('Page is fully loaded');
}

window.addEventListener('load', main);
colorElement.addEventListener('click', onClickSquareBox2);
colorElement.addEventListener('touch', onClickSquareBox2);
colorElement.addEventListener('click', onClickSquareBox1);
colorElement.addEventListener('touch', onClickSquareBox1);



async function onClickSquareBox1() {

    const details = await fetch("/findall")
    console.log(details);

    if (incrementer == locationsArray.length) {
        incrementer = 0;
    }

    // TESTING CHANGES
    console.log("GET STORAGE LOCATIONS", localStorage.getItem("locations"));
    document.getElementById("targetloc").innerHTML = "The treasure location is ready..! ";
    document.getElementById("lbl").innerHTML = " Start playing the game.";
    let utterance = new SpeechSynthesisUtterance(`The treasure location is ready start playing the game.`);
    speechSynthesis.speak(utterance);
    incrementer++;

}



async function getLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    }).then(position => {
        return position;
    });
}

let currentlat, currentlon, loc, error = true;
let targetLoc = locationsArray[Math.floor(Math.random() * locationsArray.length)];

async function onClickSquareBox2() {
    const locText = await getLocation();
    // loc = 'Your current Location';
    // document.getElementById("location").innerHTML = loc;
    currentlat = locText.coords.latitude;
    console.log(currentlat)
    document.getElementById("device-lat").innerHTML = currentlat.toFixed(9);
    currentlon = locText.coords.longitude;
    console.log(currentlon)
    document.getElementById("device-long").innerHTML = currentlon.toFixed(9);

    // locationsArray.forEach(function(value) {
    //     if (isInside(value.Latitude, value.Longitude)) {
    //         document.getElementById("location").innerHTML = value.Name;
    //         let utterance = new SpeechSynthesisUtterance("Congratulations!, You found location ${value.Name}");
    //         speechSynthesis.speak(utterance);
    //         error = false;
    //     }
    // });

    if (error) {
        console.log("error is here")
        document.getElementById("error-message").innerHTML = "Sorry,You're not near to the treasure";
        let utterance = new SpeechSynthesisUtterance("Sorry,You're not near to the treasure");
        speechSynthesis.speak(utterance);
    } else {
        document.getElementById("error-message").innerHTML = "";
    }

}

// function isInside(questLat, questLon) {
//     let distance = distanceBetweenLocations(questLat, questLon);
//     console.log("distance: " + distance);
//     if (distance < 30) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function distanceBetweenLocations(questLat, questLon) {
//     const R = 6371e3;
//     const φ1 = currentlat * Math.PI / 180;
//     const φ2 = questLat * Math.PI / 180;
//     const Δφ = (questLat - currentlat) * Math.PI / 180;
//     const Δλ = (questLon - currentlon) * Math.PI / 180;

//     const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
//         Math.cos(φ1) * Math.cos(φ2) *
//         Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//     const d = R * c;
//     return d;
// }