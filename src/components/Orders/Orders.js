import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFormLocalStorageDB } from '../../utilities/localStorageDB';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    // useProduct & use Cart Import from hooks
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    // handleRemove Item from Shopping cart
    const handleRemoveItem = (selectedItem) => {
        const rest = cart.filter(product => product.id !== selectedItem.id);
        setCart(rest);

        // try to remove items from Local Storage db but fail
        // removeFormLocalStorageDB(selectedItem.id);
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
                    <Cart cart={cart}>

                        <button className="clear-btn">Clear Cart</button>

                        <Link to='/inventory'>
                            <button className="review-btn">Procced to Check</button>
                        </Link>
                    </Cart>
                </div>

            </div>
        </div>
    );
};

export default Orders;