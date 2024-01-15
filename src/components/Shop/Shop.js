import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() =>{
        fetch('./products.JSON')
            .then(response => response.json())
            .then(data => setProducts(data))
    },[])

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        console.log("newCart++", newCart);
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.key}
                        product={product}
                        handleAddToCart ={handleAddToCart}
                        >
                        </Product>)
                }
            </div>
            <div className="cart-container">
                <h3>Order Summary</h3>
                <h5>Items Ordered: {cart.length}</h5>
            </div>
        </div>
    );
};

export default Shop;