import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import './Shop.css';

const Shop = () => {
    // Load data
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    // add to Cart list
    const [cart, setCart] = useState([]);
    const AddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);

    };

    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        AddToCart={AddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container-bg">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;