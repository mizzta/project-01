document.addEventListener("DOMContentLoaded", function () {
    // all of your JS code goes here


    const nameEl = document.getElementById('name');
    console.log(nameEl);
    const name = prompt("Please enter a name");
    nameEl.innerHTML = name;


    const evolveBtn = document.getElementById('evolve');

    let currentStage = 'Simple Spore';
    let clicks = 1;

    // Add the initial stage of evolution to the span id="evolution"

    evolveBtn.addEventListener("click", function evolve() {


        // add 1 to the clicks variable
        clicks = clicks + 1;
        //clicks++; 


        // When the number of clicks reaches 10, add a second stage of evolution to the DOM!
        if (clicks === 10) {

        // You choose the name of each additional stage.
        currentStage = "small larvae";
        }

        if (clicks === 20) {
            currentStage = "Medium";
        }

        if (clicks === 30) {
            currentStage = "Larege";
        }

        if (clicks === 40) {
            currentStage = "Jumbo";
        }

        if (clicks === 50) {
            currentStage = "Mega";
            alert("Your creature has attained Saṃsāra.");
        }

        console.log("clicks is now " + clicks);
        console.log("currentStage is now " + currentStage);




    });

});