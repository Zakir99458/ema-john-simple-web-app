import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props.cart);
    const {cart} = props;
    let total = 0;

    for(const porduct of cart){
        total = total + porduct.price;
    }
    const shipping = total>0 ? 15 : 0;
    const tax = (total + shipping) * .1
    const grandTotal = total + shipping + tax;

    return (

        <div>
            <h3>Order Summary</h3>
            <h5>Items Ordered: {props.cart.length}</h5>
            <br />
            <p>Total: {total}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax}</p>
            <p>Grand Total: {grandTotal}</p>
        </div>
    );
};

export default Cart;