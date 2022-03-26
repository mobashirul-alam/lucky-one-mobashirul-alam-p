import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Equipment from '../Equipment/Equipment';
import './Equipments.css'

const Equipments = () => {
    const [equipments, setEquipments] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setEquipments(data))
    }, [])
    return (
        <div className='main-container'>
            <div className='equipment-container'>
                {
                    equipments.map(equipment => <Equipment
                        key={equipment.id}
                        equipment={equipment}
                    ></Equipment>)
                }
            </div>
            <div>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Equipments;