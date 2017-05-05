// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {
  	"turkey": 1.80,
  	"ham": 1.00,
  	"roast-beef": 2.25,
  	"bacon": 2.45
  	};
console.log("meat loaded");
  // Augment the original object with another method
  maker.addMeat = function() {
    let totalPrice = SandwichMaker.addBread();
 	  for(prop in meatPrices) {
      //totalPrice = 0;
   		if(document.getElementById(prop).checked) {
   			console.log(meatPrices[prop]);
        //totalPrice = 0;
        totalPrice += meatPrices[prop];
   		}
   	}
  console.log("total", totalPrice);
 	//return totalPrice;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});