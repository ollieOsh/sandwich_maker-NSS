// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var breadPrices = {
  	"herbs": 2.50,
  	"white": 2.00,
  	"wheat": 2.25
  	};
console.log("bread loaded");
  // Augment the original object with another method
  maker.addBread = function(bread) {
    return breadPrices[bread];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);