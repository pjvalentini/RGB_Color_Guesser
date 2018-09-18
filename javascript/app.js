// Lets Start by giving our squares a dfferent color.

// Storing the genrateRandColor() in a var for use later on.
var colors = genrateRandColors(6);
// select the h1. 
var h1 = document.querySelector("h1");
// Select all squares
var squares = document.querySelectorAll(".square");
// Storing the pickRandomColor() in a var for use later on.
var pickedColor = pickRandomColor();
// select the span in the h1 to display the color to be guessed.
var colorDisplay = document.getElementById("colorDisplay");
// select answer id from the span inside the div.
var answer = document.getElementById("answer");
// select the reset button (New Colors)
var resetButton = document.getElementById("reset");

// add an event on the reset button
resetButton.addEventListener("click", function() {
    // genrate all new colors
    colors = genrateRandColors(6);
    // pick new rand color from array
    pickedColor = pickRandomColor();
    // change color display to match picked color.
    colorDisplay.textContent = pickedColor;
    // change colors of squares on page
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    // change color of h1 background back to #232323 after reset.
    h1.style.backgroundColor = "#232323";
});

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
       console.log(clickedColor, pickedColor);
        // compare color to pickedColor
       if(clickedColor === pickedColor) {
           answer.textContent = "Correct!";
           // changes the text of the button after game ends.
           resetButton.textContent = "Play Again?";
           // call changeToCorrectColor(), pass in clickedColor
           changeToCorrectColor(clickedColor);
           // changes to the background color of the h1 to the correct choice.
           h1.style.backgroundColor = clickedColor;
       } else {
           this.style.backgroundColor = "#232323";
           answer.textContent = "Try Again!"
       }
    });
};

// This function will make all the suqares change to color of the correct choice when selected.
// It takes an argument "color"
function changeToCorrectColor(color) {
    // loop through all squares
    for(var i = 0; i < colors.length; i++) {
        // change color to match correct guess to the squares Array
        squares[i].style.backgroundColor = color;
    };  
};

// This function will allow us to pick a random color as the correct choice
// So that its not hard coded and more flexible.
function pickRandomColor() {
    // This picks one of the colors from the array colors
    var randomizer = Math.floor(Math.random() * colors.length);
    // This returns that random color.
    return colors[randomizer];
};

// This function will allow us to use randomly generated colors.
// We will not be dependent on hard coded colors now.
function genrateRandColors(num) {
    // make an array
    var colorArr = [];
    // add num random colors to array
    for(var i = 0; i < num; i++) {
       // get random color and push into colorArr 
       colorArr.push(randomColor());
    }
    // return that array
    return colorArr;
}

// This function will generate the random color
function randomColor() {
    // pick three rgb colors from 0 to 255
    // Red
    var r = Math.floor(Math.random() * 256);
    // Green
    var g = Math.floor(Math.random() * 256);
    // Blue
    var b = Math.floor(Math.random() * 256);
    // Make sure to add the spaces after the commas or else there will not be a match!
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

