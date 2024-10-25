export const cart = [];

export function addToCart(productId){
  let machingItem; 
  cart.forEach((item) =>{
    if(item.productId === productId){
      machingItem = item;
    }
  })
 
  if(machingItem){
    machingItem.quantity++;
  }
  else{
    cart.push({
      productId: productId,
      quantity: 1
    }
    )
  }
}

 export function updateCartQuantity(){
  let cartQuantity = 0;
  cart.forEach((cartItem) =>{
    cartQuantity += cartItem.quantity;
  })
  document.querySelector('.cart-quantity').innerHTML = cartQuantity;
}