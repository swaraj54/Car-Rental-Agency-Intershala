import React from 'react';
// import './Product.css';


const CartProduct = (props) => {
    const { model, number,seating,rent,image } = props.product;
    return (
      <div className="card">
          <img src={image} />
        <article>Model Name: <b>{model}</b> </article>
        <article>Car Number: <b>{number}</b></article>
        <article>Seating Capacity: <b>{seating} People</b></article>
        <article>Rent per Day: <b>{rent}Rs.</b></article>
      </div>
    )
}

export default CartProduct;