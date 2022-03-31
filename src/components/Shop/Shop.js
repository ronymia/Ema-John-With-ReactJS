import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import { addToLocalStorageDB, getLocalStoredCart } from '../../utilities/localStorageDB';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import './Shop.css';

const Shop = () => {
    // Load data 
    const [products, setProducts] = useProducts();

    // add to Cart list
    const [cart, setCart] = useState([]);

    // get data from local storage DB
    useEffect(() => {
        const storedCart = getLocalStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products]);

    const handleAddToCart = (selectedProduct) => {
        console.log(selectedProduct);
        let newCart = [];
        const existsProducts = cart.find(product => product.id === selectedProduct.id);
        if (!existsProducts) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const restProduct = cart.filter(product => product.id !== selectedProduct.id);
            existsProducts.quantity = existsProducts.quantity + 1
            newCart = [...restProduct, existsProducts];
        }
        // const newCart = [...cart, selectedProduct]
        setCart(newCart);
        addToLocalStorageDB(selectedProduct.id);
    };

    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
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