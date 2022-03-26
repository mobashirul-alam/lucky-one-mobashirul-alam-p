import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Equipment.css'

const Equipment = (props) => {
    const { name, price, img } = props.equipment;
    return (
        <div className='equipment'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Price : BDT {price}</p>
            <button>Add to Cart <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></button>
        </div>
    );
};

export default Equipment;