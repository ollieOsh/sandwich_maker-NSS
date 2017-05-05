// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var cheesePrices = {
  	"american": .5,
  	"swiss": .5,
  	"provolone": .5,
  	"cheddar": .5,
  	"asiago": 1
  };
  console.log('cheese loaded');

  // Augment the original object with another method
  maker.addCheese = function(cheese) {
    return cheesePrices[cheese];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);