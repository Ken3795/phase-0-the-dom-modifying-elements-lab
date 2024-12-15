// Write your code here!
// Remove the "main" element from the DOM
const mainElement = document.getElementById("main");
mainElement.remove();

// Create a new "h1" element
const newHeader = document.createElement("h1");

// Set an id attribute of "victory" to the new header
newHeader.id = "victory";

// Add content to the new header using textContent
newHeader.textContent = "YOUR-NAME is the champion";

// Append the new header to the body
document.body.append(newHeader);
