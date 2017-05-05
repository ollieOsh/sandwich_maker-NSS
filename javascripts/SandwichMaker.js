var SandwichMaker = (function() {

  // Private variable to store the price
var totalPrice = 0;

  // Return the public interface that other code can interact with
  return {
    addTopping: function(toppingPrice) {
    	totalPrice += toppingPrice;
    	console.log("addTopping price", totalPrice);
    	return totalPrice;
    },
    removeTopping: function(toppingPrice) {
    	totalPrice -= toppingPrice;
    	console.log("removeTopping price", totalPrice);
    	return totalPrice;
    }
  };
})();

