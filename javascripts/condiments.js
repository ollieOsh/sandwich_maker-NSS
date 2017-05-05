// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different condiment prices
  var condimentPrices = {
  	"mustard": .25,
  	"mayo": .25,
  	"bbq": .25,
  	"sriracha": .25
  	};
console.log("condiments loaded");
  // Augment the original object with another method
  maker.addCondiments = function(condiment) {
    return condimentPrices[condiment];
   	}

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);