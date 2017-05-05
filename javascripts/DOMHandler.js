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
  let obj = SandwichMaker.addBread(selectedTopping);
  let price = 0;
  let selTop = document.getElementById(selectedTopping);
  let label = document.querySelector('label[for=' + selectedTopping + ']').innerHTML;
  let breadOrder = document.getElementById("bread-order");

  if(breadChooser.querySelectorAll(':checked').length == 0) {
    breadOrder.innerHTML += 'None ';
  }else {
    breadOrder.innerHTML = breadOrder.innerHTML.replace('None ', '');
  }

  if(breadOrder.innerHTML.indexOf("Bread: ") === -1){
    breadOrder.innerHTML += "Bread: "
  }

  if(selTop.checked && (breadOrder.innerHTML.indexOf(label) === -1)){
    breadOrder.innerHTML += label + ' ';
    price = SandwichMaker.addTopping(obj);
  } else if(!(selTop.checked)) {
    breadOrder.innerHTML = breadOrder.innerHTML.replace(label, '');
    price = SandwichMaker.removeTopping(obj);
  }

  console.log('BREAD PRICE', price);
});

meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;

  // Determine the price of the topping chosen
  console.log("meaty");
  let obj = SandwichMaker.addMeat(selectedTopping);
  let price = 0;
  let selTop = document.getElementById(selectedTopping);
  let label = document.querySelector('label[for=' + selectedTopping + ']').innerHTML;
  let meatOrder = document.getElementById('meat-order');

  if(meatChooser.querySelectorAll(':checked').length == 0) {
    meatOrder.innerHTML += 'None ';
  }else {
    meatOrder.innerHTML = meatOrder.innerHTML.replace('None ', '');
  }

  if(meatOrder.innerHTML.indexOf("Meat: ") === -1){
    meatOrder.innerHTML += `Meat: `;
  }

  if(selTop.checked && (meatOrder.innerHTML.indexOf(label) === -1)){
    meatOrder.innerHTML += label + ' ';
    price = SandwichMaker.addTopping(obj);
  } else if(!(selTop.checked)) {
    meatOrder.innerHTML = meatOrder.innerHTML.replace(label, '');
    price = SandwichMaker.removeTopping(obj);
  }
  // Add the topping to the SandwichMaker to increase the total price
  console.log("MEAT PRICE", price);
});

cheeseChooser.addEventListener("change", function(event){
  console.log("cheesy");
  selectedTopping = event.target.value;

  let obj = SandwichMaker.addCheese(selectedTopping);
  let price = 0;
  let selTop = document.getElementById(selectedTopping);
  let label = document.querySelector('label[for=' + selectedTopping + ']').innerHTML;
  let cheeseOrder = document.getElementById('cheese-order');

  if(cheeseChooser.querySelectorAll(':checked').length == 0) {
    cheeseOrder.innerHTML += 'None ';
  }else {
    cheeseOrder.innerHTML = cheeseOrder.innerHTML.replace('None ', '');
  }

  if(cheeseOrder.innerHTML.indexOf("Cheese: ") === -1){
    cheeseOrder.innerHTML += `Cheese: `;
  }

  if(selTop.checked && (cheeseOrder.innerHTML.indexOf(label) === -1)){
    cheeseOrder.innerHTML += label + ' ';
    price = SandwichMaker.addTopping(obj);
  } else if(!(selTop.checked)) {
    cheeseOrder.innerHTML = cheeseOrder.innerHTML.replace(label, '');
    //SandwichMaker.removeTopping(obj[selectedTopping]);
    price = SandwichMaker.removeTopping(obj);
  }
  console.log("CHEESE PRICE:", price)
  finalSandwichPrice += price;
});
// finalSandwichPrice += SandwichMaker.addTopping();