import { useEffect, useState } from 'react';


const ItemCount = ({ stock = 0, initial = 1, onAdd}) => {
    const [cant, setCant] = useState(0);

    useEffect(() => {
        setCant(initial);
    }, []);

    const subtract = () => {
        if (cant > initial) {
            setCant(cant-1);
        }
    }

    const add = () => {
        if (cant < stock){
            setCant(cant+1);
        }  
    }

    return (
        <>
            <div className="cont-button">
                <button onClick={subtract} className="btn-">-</button>
                <p className='cantidad'>{cant}</p>
                <button onClick={add} className="btnplus">+</button>
                {
                    stock && cant
                    ? <button onClick={() => onAdd(cant)} className='btnAdd'>Add To Cart</button>
                    : <button className='btnAdd' disabled>Add To Cart</button>
                }
            </div>
        </>
    );
    
}

export default ItemCount;