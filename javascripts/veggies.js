// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different veggie prices
  var veggiePrices = {
  	"lettuce": .25,
  	"spinach": .25,
  	"pickles": .25,
  	"onions": .25,
    "banPep": .25,
    "bellPep": .25,
    "tomatoes": .25,
    "olives": .25
  	};
console.log("veggies loaded");
  // Augment the original object with another method
  maker.addVeggies = function(veggie) {
    return veggiePrices[veggie];
   	}

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);