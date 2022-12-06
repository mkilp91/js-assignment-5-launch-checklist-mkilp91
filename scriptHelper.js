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

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}
function validateInput(testInput) {
    let numInput = Number(testInput);
    if (testInput === ""){
        return "Empty"
    } else if (isNaN(numInput) === false){
        return "Not a Number"
    } else if (isNan(numInput) === true) {
        return "Is a Number"
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
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
