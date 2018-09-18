// set the number squares depending on game mode.
var numOfSquares = 6;
// Storing the genrateRandColor() in a var for use later on.
// var colors = genrateRandColors(numOfSquares);
// we can set colors as an empty array now, since reset() does that already;
var colors = [];
// Storing the pickRandomColor() in a var for use later on.
// var pickedColor = pickRandomColor();
// we can set pickedColor as undeclared, since reset() declares that already;
var pickedColor;
// select the h1. 
var h1 = document.querySelector("h1");
// Select all squares
var squares = document.querySelectorAll(".square");
// select the span in the h1 to display the color to be guessed.
var colorDisplay = document.getElementById("colorDisplay");
// select answer id from the span inside the div.
var answer = document.getElementById("answer");
// select the reset button (New Colors)
var resetButton = document.getElementById("reset");
// select easy and hard buttons
// var easyBtn = document.getElementById("easyBtn");
// var hardBtn = document.getElementById("hardBtn");
// REFACTORING!
// by setting the same class on the buttons we can have combined functionality
// and clean up this code.
var modeButtons = document.querySelectorAll(".mode");

// init() runs the whole program on page load.
init();

function init() {
   // call setUpModeButtons();
   setUpModeButtons();
   // call setUpSquares()
   setUpSquares();
    // we want to reset the screen after a round of the game
    reset();
};

function setUpModeButtons() {
     // modeButtons eventListener.
     // loop through the mode buttons
     for (var i = 0; i < modeButtons.length; i++) {
         modeButtons[i].addEventListener("click", function () {
             // remove the selected class on each index of modeButton;
             modeButtons[0].classList.remove("selected");
             modeButtons[1].classList.remove("selected");
             // we want to add the selected class for the buttons when we click.
             this.classList.add("selected");
             // you can use a ternary operator here
             this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
             reset();
         });
     };
}

function setUpSquares() {
     // loop through all squares and set colors on the them from the array
     for (var i = 0; i < squares.length; i++) {

         // add click listeners to squares
         squares[i].addEventListener("click", function () {
             // grab color of clicked square
             var clickedColor = this.style.backgroundColor;
             console.log(clickedColor, pickedColor);
             // compare color to pickedColor
             if (clickedColor === pickedColor) {
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
}


function reset() {
    colors = genrateRandColors(numOfSquares);
    // pick new random color from array
    pickedColor = pickRandomColor();
    // change color display to match picked color.
    colorDisplay.textContent = pickedColor;
    // changes the text back to new colors when toggling
    resetButton.textContent = "New Colors";
    // clears the answer span when the game resets.
    answer.textContent = "";
    // change colors of squares on page
    for (var i = 0; i < squares.length; i++) {
        // we need to hide three squares for easy mode
        if(colors[i]) {
            // this brings the 3 bottom squares back for hard mode
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            // this will hde the bottom 3 squares in easy mode
            squares[i].style.display = "none";
        };
    };
    // change color of h1 background back to steelblue after reset.
    h1.style.backgroundColor = "steelblue";
}

// add an event on the reset button
resetButton.addEventListener("click", function() {
    // all we need to do here is call the rest function!
    reset();
});

// REDUNDANT CODE WAS HERE -- REFACTORED IT ABOVE

// add events to easy and hard button
// easyBtn.addEventListener("click", function() {
//     // add class selcted to easyBtn
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     // changes background color to steelblue when you toogle game modes
//     h1.style.backgroundColor = "steelblue";
//     // changes the text back to new colors when toggling
//     resetButton.textContent = "New Colors";
//     // set the amt of squares to 3 for easy mode
//     numOfSquares = 3;
//     // generate new colors
//     colors = genrateRandColors(numOfSquares);
//     // generate a new picked color
//     pickedColor = pickRandomColor();
//     // change the display to show new picked color
//     colorDisplay.textContent = pickedColor;
//     // hide the bottom 3 squares for easy mode.
//     // use a for loop to select colors for top three sq
//     // hide the bottom three.
//     for(var i = 0; i < squares.length; i++) {
//         if(colors[i]) {
//             // only top 3 squares change
//             squares[i].style.backgroundColor = colors[i];   
//         } else {
//             // hides bottom 3 squares
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click", function () {
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     // changes background color to steelblue when you toogle game modes
//     h1.style.backgroundColor = "steelblue";
//     // changes the text back to new colors when toggling
//     resetButton.textContent = "New Colors";
//    // set the amt of squares to 6 for hard mode
//     numOfSquares = 6;
//     colors = genrateRandColors(numOfSquares);
//     // generate a new picked color
//     pickedColor = pickRandomColor();
//     // change the display to show new picked color
//     colorDisplay.textContent = pickedColor;

//     // hide the bottom 3 squares for easy mode.
//     // use a for loop to select colors for top three sq
//     // hide the bottom three.
//     for (var i = 0; i < squares.length; i++) {
//             squares[i].style.backgroundColor = colors[i];
//             squares[i].style.display = "block";  
//     }
// });


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
    // pick three rgb colors from 0 to 255 so (256 will figure 0 as a num)
    // Red
    var r = Math.floor(Math.random() * 256);
    // Green
    var g = Math.floor(Math.random() * 256);
    // Blue
    var b = Math.floor(Math.random() * 256);
    // Make sure to add the spaces after the commas or else there will not be a match!
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

