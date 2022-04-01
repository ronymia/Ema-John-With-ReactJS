import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    // useProduct & use Cart Import from hooks
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    // handleRemove Item from Shopping cart
    const handleRemoveItem = (seletedItem) => {
        const rest = cart.filter(product => product.id !== seletedItem.id);
        setCart(rest);
    }

    return (
        <div className='shop-container'>
            <div className="reviewitem-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container-bg">
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>

            </div>
        </div>
    );
};

export default Orders;