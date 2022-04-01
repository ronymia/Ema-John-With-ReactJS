import React from 'react';
import './ReviewItms.css';

const ReviewItem = (props) => {
    // Destructuring 
    const { name, price, img, shipping, quantity } = props.product;

    return (
        <div className='reviewItem'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="reviewitem-details-container">
                <div className="reviewitem-details">
                    <p><span className="item-name">{name}</span></p>
                    <p>Price : <span className="orange-color">{price}</span></p>
                    <p>Shipping Charge : <span className="orange-color">{shipping}</span></p>
                    <p>Quantity : <span className="orange-color">{quantity}</span></p>
                </div>
                <div className="delete-item">
                    <button>delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;