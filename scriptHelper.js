// Write your helper functions here!
require('isomorphic-fetch');

// const form = document.querySelector("form");
// const pilotName = document.getElementById("pilotName");
// const copilotName = document.getElementById("copilotName");
// const fuelLevel = document.getElementById("fuelLevel");
// const cargoMass = document.getElementById("cargoMass");
// const submitButton = document.getElementById("formSubmit");

// const pilotStatus = document.getElementById("pilotStatus");
// const copilotStatus = document.getElementById("copilotStatus");
// const fuelStatus = document.getElementById("fuelStatus");
// const cargoStatus = document.getElementById("cargoStatus");

{/* <li id="pilotStatus" data-testid="pilotStatus">Pilot Ready</li>
<li id="copilotStatus" data-testid="copilotStatus">Co-pilot Ready</li>
<li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
<li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li> */}

function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
   // Here is the HTML formatting for our mission target div.
   const div = document.getElementById('missionTarget');
   div.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${image}">
                `;
}
function validateInput(testInput) {
    let numInput = Number(testInput);
    if (testInput === ""){
        return "Empty";
    } else if (isNaN(numInput) === false){
        return "Is a Number";
    } else if (isNaN(numInput)) {
        return "Not a Number";
    }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
        alert("All fields are required!");     
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number"){
        alert("Please enter valid values for each field!")
    } else {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Go for ${pilot}.`;
        copilotStatus.innerHTML = `Go for ${copilot}.`;
        const launchStatus = document.getElementById("launchStatus");
        if (fuelLevel < 10000 && cargoLevel <= 10000){
            list.style.visibility = "visbile";
            fuelStatus.innerHTML = "Insufficient fuel!";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            cargoStatus.innerHTML = "Cargo mass acceptable.";
        } else if (fuelLevel < 10000 && cargoLevel > 10000){
            list.style.visibility = "visbile";
            fuelStatus.innerHTML = "Insufficient fuel!";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            cargoStatus.innerHTML = "Cargo exceeds maximum capacity!";
        } else if (fuelLevel >= 10000 && cargoLevel > 10000){
            list.style.visibility = "visbile";
            fuelStatus.innerHTML = "Fuel level acceptable.";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            cargoStatus.innerHTML = "Cargo exceeds maximum capacity!";
        } else if (fuelLevel >= 10000 && cargoLevel <= 10000){
            list.style.visibility = "visbile";
            fuelStatus.innerHTML = "Fuel level acceptable.";
            launchStatus.innerHTML = "Shuttle ready for launch";
            launchStatus.style.color = "green";
            cargoStatus.innerHTML = "Cargo mass acceptable.";
        }
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let planetIndex = Math.floor((planets.length)*Math.random());
    return planets[planetIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
