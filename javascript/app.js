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
           alert("Correct");
       } else {
           alert("Wrong");
       }
    });
}

