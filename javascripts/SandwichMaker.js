var SandwichMaker = (function() {

  // Private variable to store the price
var totalPrice = 0,
  	oldPrice = 0;

  // Return the public interface that other code can interact with
  return {
    addTopping: function(toppingPrice) {
    	totalPrice += toppingPrice;
    	oldPrice = totalPrice;
    	console.log("addTopping price", totalPrice);
    	totalPrice -= oldPrice;
    }
  };
})();

