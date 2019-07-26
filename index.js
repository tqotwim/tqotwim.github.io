// AddClientButton onclick should duplicate first and last name text box and position new text boxes under previous
// Submit button should send data to appropriate worker in check out logs and also to page with percentages, daily numbers
//Submit should send client data to alphabetical page by last name for client to see client activity in agency
// const displayCheckedInClient = {
  
// };

const addClientButton = document.getElementById('addClientButton');

function addClient(event) {
   event.preventDefault();
  // console.log("event target", event.target);
  let addInputElement = document.getElementById("fullName");  //target div id from html document, fullName 
  let createDiv = document.createElement("div"); // create div element
 let createInput = document.createElement("input"); // create input
  createDiv.append(createInput); // added input to div - now createDiv contains createInput
  addInputElement.append(createDiv); // adds createDiv.append(createInput) to div on html

};

addClientButton.addEventListener("click", addClient);
  

  
 