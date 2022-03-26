import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Equipment.css'

const Equipment = (props) => {
    const { handleAdd2Cart, equipment } = props;
    const { name, price, img } = equipment;
    return (
        <div className='equipment'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Price : BDT {price}</p>
            <button onClick={() => handleAdd2Cart(equipment)} className='btn-add2cart'><FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> Add to Cart</button>
        </div>
    );
};

export default Equipment;