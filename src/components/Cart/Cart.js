import React from 'react';
import './Cart.css'

const Cart = ({ cartInfo }) => {
    const { name, img } = cartInfo;
    return (
        <div className='cart'>
            <img src={img} alt="" />
            <p>{name}</p>
        </div >
    );
};

export default Cart;