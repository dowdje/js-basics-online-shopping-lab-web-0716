var cart = [];

function getCart(){
  return cart
}

function addToCart(item){
  var price = Math.floor(Math.random() * 100)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  var str = "Your shopping cart is empty."
  if (getCart().length > 0){
  var str ="In your cart, you have "

    for (var i = 0; i < getCart().length; i++){
      for (var item in getCart()[i]){
        str += `${item} at $${getCart()[i][item]}, `;
      }
    }
    str = str.slice(0, -2)
    str = str + '.'
  }


  console.log(str)
  return str
}

function setCart(newCart) {
  cart = newCart;
}

function removeFromCart(item){
  for (var i = 0; i < getCart().length; i++){
    for ( var inv in getCart()[i]){
      if (item === inv){
        getCart().splice(i, 1)
        return true

      }
    }
  }
  console.log("That item is not in your cart.")
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function placeOrder(card){
  if (card){
  console.log(`Your total cost is $${total()}, which will be charged to the card ${card}.` )
  cart = []
  return
  }
  console.log('We don\'t have a credit card on file for you to place your order.')

}
