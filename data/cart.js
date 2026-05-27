export const cart = [];

export function addToCart(productId) {
    // Checks if product is already in cart and/or adds a product
      let matchingItem;

      cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matchingItem = cartItem;
        }
      });

        if (matchingItem) {
          matchingItem.quantity += 1;
        } else {
            cart.push({
            productName: productId,
            quantity: 1
          });
        }
  }