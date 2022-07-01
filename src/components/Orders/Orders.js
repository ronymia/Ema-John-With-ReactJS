import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFormLocalStorageDB } from '../../utilities/localStorageDB';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart();

    // handleRemove Item from Shopping cart
    const handleRemoveItem = (selectedItem) => {
        const rest = cart.filter(product => product._id !== selectedItem._id);
        setCart(rest);

        //remove items from Local Storage db
        removeFormLocalStorageDB(selectedItem._id);
    }

    const navigate = useNavigate()

    return (
        <div className='shop-container'>
            <div className="reviewitem-container">
                {
                    cart.map(product => <ReviewItem
                        key={product._id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container-bg">
                <div className="cart-container">
                    <Cart cart={cart}>

                        <button onClick={() => navigate('/shipment')} className="review-btn">Proceed to Shipping</button>
                    </Cart>
                </div>

            </div>
        </div>
    );
};

export default Orders;