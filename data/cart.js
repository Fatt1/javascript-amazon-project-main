export let cart = JSON.parse(localStorage.getItem('cart')) || [];
if (cart.length == 0){
  cart = [
    {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2,
    deliveryOptionId: '1'
    }, 
    {
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 1,
      deliveryOptionId: '2'
    }
  ];
}

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
      quantity: 1,
      deliveryOptionId: '1'
    }
    )
  }
  saveToStorage();
}

 export function updateCartQuantity(){
  let cartQuantity = 0;
  cart.forEach((cartItem) =>{
    cartQuantity += cartItem.quantity;
  })
  document.querySelector('.cart-quantity').innerHTML = cartQuantity;
  
}

export function removeFromCart(productId){
  const newCart = [];
  cart.forEach((cartItem) =>{
    if(cartItem.productId !== productId)
      newCart.push(cartItem);
  })

  cart = newCart;
  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}