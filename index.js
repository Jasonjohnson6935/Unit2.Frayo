//Task:
// A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors.
// They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. When they view the browser console, they observe an object listing how many of each flavor they have ordered.
// In this case, they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo.

// Function to count the frequencies of flavors
function countFlavorFrequencies(flavors) {
  var flavorCount = {};

  flavors.forEach(function (flavor) {
    flavor = flavor.trim();

    if (flavorCount[flavor]) {
      flavorCount[flavor]++;
    } else {
      flavorCount[flavor] = 1;
    }
  });

  return flavorCount;
}

// Prompt the user for input
var userInput = prompt("Enter a list of comma-separated froyo flavors:");

// Check if the user entered something
if (userInput) {
  // Split the input into an array of flavors
  var flavors = userInput.split(",");

  // Call the function to count flavor frequencies
  var flavorCount = countFlavorFrequencies(flavors);

  // Display the result in the console
  console.log("Flavor Count:", flavorCount);
} else {
  // Display a message if the user didn't enter anything
  console.log("No input provided. Please try again.");
}


