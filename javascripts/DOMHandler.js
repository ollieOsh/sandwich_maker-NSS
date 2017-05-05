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
  finishedOrder = document.getElementById("finished-order"),
  button = document.getElementById("btn");

/*
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/

breadChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  console.log("bready");
  let obj = SandwichMaker.addBread(selectedTopping);
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
    finalSandwichPrice = SandwichMaker.addTopping(obj);
  } else if(!(selTop.checked)) {
    breadOrder.innerHTML = breadOrder.innerHTML.replace(label, '');
    finalSandwichPrice = SandwichMaker.removeTopping(obj);
  }

  console.log('BREAD PRICE', finalSandwichPrice);
});

meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;

  // Determine the price of the topping chosen
  console.log("meaty");
  let obj = SandwichMaker.addMeat(selectedTopping);
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
    finalSandwichPrice = SandwichMaker.addTopping(obj);
  } else if(!(selTop.checked)) {
    meatOrder.innerHTML = meatOrder.innerHTML.replace(label, '');
    finalSandwichPrice = SandwichMaker.removeTopping(obj);
  }
  // Add the topping to the SandwichMaker to increase the total price
  console.log("MEAT PRICE", finalSandwichPrice);
});

cheeseChooser.addEventListener("change", function(event){
  console.log("cheesy");
  selectedTopping = event.target.value;

  let obj = SandwichMaker.addCheese(selectedTopping);
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
    finalSandwichPrice = SandwichMaker.addTopping(obj);
  } else if(!(selTop.checked)) {
    cheeseOrder.innerHTML = cheeseOrder.innerHTML.replace(label, '');
    finalSandwichPrice = SandwichMaker.removeTopping(obj);
  }
  console.log("CHEESE PRICE:", finalSandwichPrice);
});

condimentsChooser.addEventListener("change", function(event){
  console.log("condimentsy");
  selectedTopping = event.target.value;

  let obj = SandwichMaker.addCondiments(selectedTopping);
  let selTop = document.getElementById(selectedTopping);
  let label = document.querySelector('label[for=' + selectedTopping + ']').innerHTML;
  let condimentsOrder = document.getElementById('condiment-order');

  if(condimentsChooser.querySelectorAll(':checked').length == 0) {
    condimentsOrder.innerHTML += 'None ';
  }else {
    condimentsOrder.innerHTML = condimentsOrder.innerHTML.replace('None ', '');
  }

  if(condimentsOrder.innerHTML.indexOf("Condiments: ") === -1){
    condimentsOrder.innerHTML += `Condiments: `;
  }

  if(selTop.checked && (condimentsOrder.innerHTML.indexOf(label) === -1)){
    condimentsOrder.innerHTML += label + ' ';
    finalSandwichPrice = SandwichMaker.addTopping(obj);
  } else if(!(selTop.checked)) {
    condimentsOrder.innerHTML = condimentsOrder.innerHTML.replace(label, '');
    finalSandwichPrice = SandwichMaker.removeTopping(obj);
  }
  console.log("CONDIMENTS PRICE:", finalSandwichPrice)
});

veggiesChooser.addEventListener("change", function(event){
  console.log("veghead");
  selectedTopping = event.target.value;

  let obj = SandwichMaker.addVeggies(selectedTopping);
  let selTop = document.getElementById(selectedTopping);
  let label = document.querySelector('label[for=' + selectedTopping + ']').innerHTML;
  let veggieOrder = document.getElementById('veggie-order');

  if(veggiesChooser.querySelectorAll(':checked').length == 0) {
    veggieOrder.innerHTML += 'None ';
  }else {
    veggieOrder.innerHTML = veggieOrder.innerHTML.replace('None ', '');
  }

  if(veggieOrder.innerHTML.indexOf("Veggies: ") === -1){
    veggieOrder.innerHTML += `Veggies: `;
  }

  if(selTop.checked && (veggieOrder.innerHTML.indexOf(label) === -1)){
    veggieOrder.innerHTML += label + ' ';
    finalSandwichPrice = SandwichMaker.addTopping(obj);
  } else if(!(selTop.checked)) {
    veggieOrder.innerHTML = veggieOrder.innerHTML.replace(label, '');
    finalSandwichPrice = SandwichMaker.removeTopping(obj);
  }
  console.log("VEGGIE PRICE:", finalSandwichPrice)
});

button.addEventListener('click', function() {
  document.getElementById('final-price').innerHTML = `<i>Total</i>: ${finalSandwichPrice.toLocaleString('en-IN', { style: 'currency', currency: 'USD'})}`;
})