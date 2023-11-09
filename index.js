//Task:
// A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors. 
// They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. When they view the browser console, they observe an object listing how many of each flavor they have ordered.
// In this case, they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo.


// Prompt the user for input
var userInput = prompt("Enter a list of comma-separated froyo flavors:");

// Check if the user entered something
if (userInput) {
    // Split the input into an array of flavors
    var flavors = userInput.split(',');
  
    // Create an object to store the count of each flavor
    var flavorCount = {};
  
    // Loop through the flavors and count them
    flavors.forEach(function (flavor) {
      flavor = flavor.trim(); 
      // Remove leading and trailing spaces
      // Check if the flavor is already in the count object
      if (flavorCount[flavor]) {
        // Increment the count if it exists
        flavorCount[flavor]++;
      } else {
        // Initialize the count if it doesn't exist
        flavorCount[flavor] = 1;
      }
    });
  
    // Display the result in the console
    console.log("Flavor Count:", flavorCount);
  } else {
    // Display a message if the user didn't enter anything
    console.log("No input provided. Please try again.");
  }
