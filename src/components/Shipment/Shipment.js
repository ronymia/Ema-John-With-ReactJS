import React, { useState } from 'react';

const Shipment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');

    // const navigate = useNavigate();

    const handleNameBlur = (event) => {
        setName(event.target.value);
    }
    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }

    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }

    const handlePhoneNumber = event => {
        setPhoneNumber(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
    }
    return (
        <div className='form-container'>
            <div>
                <h3 className='form-tittle'>Shipping Proceed</h3>
                <form onSubmit={handleCreateUser}>
                    <div className="label-group">
                        <label htmlFor="Name">Your Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                    </div>
                    <div className="label-group">
                        <label htmlFor="Email">Your Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="label-group">
                        <label htmlFor="Address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className="label-group">
                        <label htmlFor="Phone Number">Phone Number</label>
                        <input onBlur={handlePhoneNumber} type="number" name="phone" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>
                        {error}
                    </p>
                    <input className='submit-btn' type="submit" value="Shipping" />
                </form>
            </div>
        </div>
    );
};

export default Shipment;