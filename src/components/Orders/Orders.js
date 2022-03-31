import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    return (
        <div>
            <h1>Total items {products.length}</h1>
            <h3>cart length : {cart.length}</h3>
        </div>
    );
};

export default Orders;