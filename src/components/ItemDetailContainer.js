import { useState , useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { firestorePromisetwo } from '../utils/firebaseConfig';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const { id } = useParams();

    useEffect(() => {
        firestorePromisetwo(id)
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