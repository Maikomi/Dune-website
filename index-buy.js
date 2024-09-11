const tripName = document.getElementById('tripName').innerText;
console.log(tripName);

let basePrice = 0;

switch(tripName) {
    case 'The Spice Trail Trip':
        basePrice = 2000;
        break;
    case 'The Legacy of House Atreides':
        basePrice = 4000;
        break;
    case 'The Battle for Arrakis':
        basePrice = 3000;
        break;
}

console.log(basePrice);


const numberOfPeopleInput = document.getElementById('numberOfPeople');
const priceOutput = document.getElementById('price');

function updatePrice() {
    const numberOfPeople = parseInt(numberOfPeopleInput.value); 
    const newPrice = basePrice * numberOfPeople;
    priceOutput.innerHTML = newPrice + '$';
}

numberOfPeopleInput.addEventListener('input', updatePrice);

updatePrice();

////
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

////

function redirect () {
    setTimeout(myURL, 5000);
    var result = document.getElementById("result");
    result.innerHTML = "<b> The page will redirect after delay of 5 seconds";
 }

 function myURL() {
    document.location.href = 'index.html';
 }