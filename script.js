// Write your JavaScript code here!

// const { validateInput } = require("./scriptHelper");

window.addEventListener("load", function() {
    const form = document.querySelector('form');
    // console.log(form);
    form.addEventListener("submit", function(event){
        validateInput();
        event.preventDefault();
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