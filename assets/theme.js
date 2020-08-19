$(document).ready(function() {

	// CART ITEM COUNTER
	var cartItemCounter = document.querySelector('span.cart-item-count')

	if (cartItemCounter) {
		jQuery.ajax({
			url: "/cart.js",
			dataType: "json"
		
		}).done(function(data) {
			var newCount = data.item_count
			cartItemCounter.innerText = newCount
		})
	}
	// END CART ITEM COUNTER



	// jQuery.post('/cart/update.js', {
	// 	updates: {
	// 		794864053: 2,
	// 		794864233: 3
	// 	}
	// });

})