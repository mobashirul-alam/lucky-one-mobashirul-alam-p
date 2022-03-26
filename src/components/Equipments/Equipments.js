import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Equipment from '../Equipment/Equipment';
import './Equipments.css'

const Equipments = () => {
    const [equipments, setEquipments] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setEquipments(data))
    }, [])

    const handleAdd2Cart = (props) => {
        const newCart = [...cart, props];
        setCart(newCart);
    }

    const handleChooseBtn = props => {
        return alert(props[Math.floor(Math.random() * props.length)].name)
    }

    return (
        <div className='main-container'>
            <div className='equipment-container'>
                {
                    equipments.map(equipment => <Equipment
                        key={equipment.id}
                        equipment={equipment}
                        handleAdd2Cart={handleAdd2Cart}
                    ></Equipment>)
                }
            </div>
            <div className='cart-section'>
                <div className='cart-container'>
                    <h1 style={{ fontWeight: "400" }}>Selected Items</h1>
                    {
                        cart.map(info => <Cart key={info.id} cartInfo={info}></Cart>)
                    }
                    <div>
                        <button onClick={() => handleChooseBtn(cart)} className='cart-btn'>Choose 1 for me</button>
                        <br />
                        <button className='cart-btn'>Choose again</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Equipments;