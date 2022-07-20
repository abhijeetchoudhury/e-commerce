

export const addItemToCart = (item, next) => {
  var cart = [];
  if (typeof window != undefined) {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    cart.push({
      ...item,
      count: 1,
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
  }
};

export const loadCart = () => {
  if (typeof window != undefined) {
    if (localStorage.getItem("cart")) {
      return JSON.parse(localStorage.getItem("cart"));
    }
  }
};

export const removeOneItem = (productId, cartItems, setCartItems) => {
  let cart = []
  if (typeof window != undefined) {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    cart.map((product, i) => {
      if (product._id === productId) {
        cart.splice(i, 1)
      }
    })
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartItems(cart)
    // console.log(cartItems)
  }
  return cart;
}
export const cartEmpty = next => {
  if (typeof window != undefined) {
    localStorage.removeItem("cart")
    next()
  }
}
