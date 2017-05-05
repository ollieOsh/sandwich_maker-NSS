// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meat-chooser"),
	breadChooser = document.getElementById("bread-chooser"),
	cheeseChooser = document.getElementById("cheese-chooser"),
	veggiesChooser = document.getElementById("veggies-chooser"),
	condimentsChooser = document.getElementById("condiments-chooser"),
  finishedOrder = document.getElementById("finished-order");

/*
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
breadChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  console.log("bready");
  let selTop = document.getElementById(selectedTopping);
  let label = document.querySelector('label[for=' + selectedTopping + ']').innerHTML;

  if(finishedOrder.innerHTML.indexOf("Bread: ") === -1){
    finishedOrder.innerHTML += "Bread: "
  }

  if(selTop.checked && (finishedOrder.innerHTML.indexOf(label) === -1)){
    finishedOrder.innerHTML += label + ' ';
  } else if(!(selTop.checked)) {
    finishedOrder.innerHTML = finishedOrder.innerHTML.replace(label, '');
  }
  SandwichMaker.addBread();
});

finishedOrder.innerHTML += '<br>'

// meatChooser.addEventListener("change", function(event) {
//   // Get the value chosen from the DOM
//   selectedTopping = event.target.value;

//   // Determine the price of the topping chosen
//   console.log("hi");
//   SandwichMaker.addMeat();

//   // Add the topping to the SandwichMaker to increase the total price
// });

//SandwichMaker.addTopping();