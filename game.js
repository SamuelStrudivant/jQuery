const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];

// Define sound files for each color
let blueSound = new Audio('sounds/blue.mp3');
let greenSound = new Audio('sounds/green.mp3');
let redSound = new Audio('sounds/red.mp3');
let yellowSound = new Audio('sounds/yellow.mp3');

let userClickedPattern = [];

// Function to generate random number between 0 and 3
function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4); 
    return randomNumber;
}

// Function to assign random colors to gamePattern without repeating
function assignColours() {  
    while (gamePattern.length < 4) { // Continue until gamePattern has 4 unique colors
        let randomIndex = nextSequence(); // Get a random index
        let randomChosenColour = buttonColours[randomIndex]; // Get color from buttonColours array
        
        // Check if randomChosenColour is not already in gamePattern
        if (!gamePattern.includes(randomChosenColour)) {
            gamePattern.push(randomChosenColour); // Add the unique color to gamePattern array
        }
    }
}

// Call the assignColours function to populate gamePattern with random unique colors
assignColours();

// Function to assign colors to buttons with class 's-btn'
function assignColorsToButtons() {
    $('.s-btn').each(function(index) {
        let color = gamePattern[index]; // Get color from gamePattern (should be in order)
        $(this).css('background-color', color); // Set background color of current button
        
        // Add click event handler to play corresponding sound when button is clicked
        $(this).click(function() {
            playSound(color);
            // Add animation (fade effect) when button is clicked
            $(this).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        });
    });
}

// Call the function to assign colors to buttons when the document is ready
$(document).ready(function() {
    assignColorsToButtons();
});

// Function to play sound based on button color
function playSound(color) {
    switch(color) {
        case 'blue':
            blueSound.play();
            break;
        case 'green':
            greenSound.play();
            break;
        case 'red':
            redSound.play();
            break;
        case 'yellow':
            yellowSound.play();
            break;
        default:
            console.log("Invalid color");
            break;
    }
}

// Output the generated gamePattern
console.log("Generated game pattern:", gamePattern);
