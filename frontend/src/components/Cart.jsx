import React from 'react';
import {useCart} from 'react-use-cart';

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart

    } = useCart();
    if(isEmpty) return <h1 sx={{textAlign: 'center'}}>Empty Cart </h1>
  return (
    <div>
      <h1>Cart ({totalUniqueItems}) Total Items: ({totalItems})</h1>
      <h1>{items}</h1>
    </div>
  )
}

export default Cart;