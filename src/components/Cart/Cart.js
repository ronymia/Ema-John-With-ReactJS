import React from 'react';

const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    };
    const tex = parseFloat((total * 0.1).toFixed(2));

    const grandTotal = total + shipping + tex;

    return (
        <div className="cart-container">
            <h4> Order Summary</h4>
            <p>Selected Items : {quantity}</p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping Charge : ${shipping}</p>
            <p>Tex : ${tex}</p>
            <h4>Grand Total : ${grandTotal}</h4>
            {props.children}
        </div>
    );
};

export default Cart;