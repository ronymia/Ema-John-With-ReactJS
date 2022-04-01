import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                    <p>Price : <small className="orange-color">${price}</small></p>
                    <p>Shipping Charge : <small className="orange-color">${shipping}</small></p>
                    <p>Quantity : <small className="orange-color">{quantity}</small></p>
                </div>
                <div className="delete-item">
                    <button className='delete-btn'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;