import React from 'react';
import './ReviewItms.css';

const ReviewItem = (props) => {
    // Destructuring 
    const { name, price, img, shipping, quantity } = props.product;

    return (
        <div className='reviewItem'>
            <h3>{name}</h3>
        </div>
    );
};

export default ReviewItem;