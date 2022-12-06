// Write your JavaScript code here!
// const { formSubmission } = require("./scriptHelper");

// const { myFetch } = require("./scriptHelper");

// const { validateInput } = require("./scriptHelper");
window.addEventListener("load", function() {

    // console.log(myFetch());

    const form = document.querySelector('form');
    const list = document.getElementById('faultyItems');
    list.style.visibility = "hidden";


    // console.log(form);
    form.addEventListener("submit", function(event){
        // validateInput();
        event.preventDefault();

        const pilotInput = document.querySelector("input[name=pilotName]");
        let pilot = pilotInput.value;
        const copilotInput = document.querySelector("input[name=copilotName]");
        let copilot = copilotInput.value;
        const fuelInput = document.querySelector("input[name=fuelLevel]");
        let fuelLevel = fuelInput.value;
        const cargoInput = document.querySelector("input[name=cargoMass]");
        let cargoLevel = cargoInput.value;



        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    });

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
//    listedPlanetsResponse.then(function (result) {
//        listedPlanets = result;
//        console.log(listedPlanets);
//    }).then(function () {
//        console.log(listedPlanets);
//        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
//    })
    
});