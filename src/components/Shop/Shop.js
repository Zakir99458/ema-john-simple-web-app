import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() =>{
        fetch('./products.JSON')
            .then(response => response.json())
            .then(data => setProducts(data))
    },[])

    useEffect(()=>{
        
        if(products.length){
            const savedCart = getStoredCart();
            const storedCart = [];

            for(const key in savedCart){
                const addedProduct = products.find(product => product.key === key);
                if(addedProduct){
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    console.log(savedCart[key]);
                    storedCart.push(addedProduct);
                }
                
                // console.log(key, addedProduct);
            }
            setCart(storedCart);
        }
    }, [products])

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        // console.log("newCart++", newCart);
        setCart(newCart);
        // Save to local storage
        addToDb(product.key);
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;