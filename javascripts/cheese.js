// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var cheesePrices = {
  	"american": .5,
  	"swiss": 1.5,
  	"provolone": 2.5,
  	"cheddar": 3.5,
  	"asiago": 4.5
  };
  console.log('cheese loaded');

  // Augment the original object with another method
  maker.addCheese = function(cheese) {
    return cheesePrices[cheese];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);