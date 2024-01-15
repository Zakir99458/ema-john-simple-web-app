import React from 'react';
import './Shop.css';

const Shop = () => {
    return (
        <div className='shop-container'>
            <div className="product-container">
                <h3>Products</h3>
            </div>
            <div className="cart-container">
                <h3>Order Summary</h3>
                <h5>Items Ordered:</h5>
            </div>
        </div>
    );
};

export default Shop;