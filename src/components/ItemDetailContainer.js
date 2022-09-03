import { useState , useEffect} from 'react';
import promesa from '../utils/promise';
import ItemDetail from './ItemDetail';
import {data} from '../utils/data';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        promesa(data[4])
            .then(result => setProduct(result))
            .catch(err => console.log(err))
    }, []);

    return(
        <>
            <section>
                <ItemDetail item={product}/>
            </section>
        </>
    );
};

export default ItemDetailContainer;