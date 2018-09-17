// Lets Start by giving our squares a dfferent color.

// Create and array or random rgb colors.
var colors = [
    "rgb(255, 0, 0)", 
    "rgb(0, 255, 0)", 
    "rgb(0, 0, 255)",
    "rgb(222, 34, 135)",
    "rgb(44, 122, 5)",
    "rgb(56, 244, 234)"
];

// Select all squares
var squares = document.querySelectorAll(".square");
// For now we hard code the correct color for testing.
var pickedColor = colors[3];
// select the span in the h1 to display the color to be guessed.
var colorDisplay = document.getElementById("colorDisplay");
// select answer id from the span inside the div.
var answer = document.getElementById("answer");
// set pickedColor to display in the DOM
colorDisplay.textContent = pickedColor;

// loop through all squares and set colors on the them from the array
for(var i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add click listeners to squares
    squares[i].addEventListener("click", function() {
        // grab color of clicked square
       var clickedColor = this.style.backgroundColor;
        // compare color to pickedColor
       if(clickedColor === pickedColor) {
           answer.textContent = "Correct!"
           // call changeToCorrectColor(), pass in clickedColor
           changeToCorrectColor(clickedColor);
       } else {
           this.style.backgroundColor = "#232323";
           answer.textContent = "Try Again!"
       }
    });
}

// This function will make all the suqares change to color of the correct choice when selected.
// It takes an argument "color"
function changeToCorrectColor(color) {
    // loop through all squares
    for(var i = 0; i < colors.length; i++) {
        // change color to match correct guess o the squares Array
        squares[i].style.backgroundColor = color;
    };  
}


