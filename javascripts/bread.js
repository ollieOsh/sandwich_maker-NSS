// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var breadPrices = {
  	"herbs": 1.50,
  	"white": 1.00,
  	"wheat": 1.25
  	};
console.log("bread loaded");
  // Augment the original object with another method
  maker.addBread = function() {
    let totalPrice = 0;
 	  for(prop in breadPrices) {
      //totalPrice = 0;
   		if(document.getElementById(prop).checked) {
   			console.log(breadPrices[prop]);
        totalPrice += breadPrices[prop];
        SandwichMaker.addTopping(breadPrices[prop])
   		}
   	}
  console.log("total", totalPrice);
 	// return totalPrice;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});