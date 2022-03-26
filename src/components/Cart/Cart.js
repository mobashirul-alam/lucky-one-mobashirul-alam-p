import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div className='cart'>
            <h1 style={{ fontWeight: "400" }}>Selected Items</h1>
            <div>
                <button className='cart-btn'>Choose 1 for me</button>
                <br />
                <button className='cart-btn'>Choose again</button>
            </div>
        </div >
    );
};

export default Cart;