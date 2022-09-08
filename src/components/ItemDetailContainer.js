import { useState , useEffect} from 'react';
import promesa from '../utils/promise';
import ItemDetail from './ItemDetail';
import {data} from '../utils/data';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const { id } = useParams();

    useEffect(() => {
        promesa(data.find( item => item.id == id))
            .then(result => setProduct(result))
            .catch(err => console.log(err))
    }, [id]);

    return(
        <>
            {
                product ?
                    (<section>
                        <ItemDetail item={product}/>
                    </section>)
                :("Loading...")
            }
            
        </>
    );
};

export default ItemDetailContainer;