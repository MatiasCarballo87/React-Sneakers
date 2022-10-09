import { useState , useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { firestorePromisetwo } from '../utils/firebaseConfig';
import './styles/ItemDetailContainer.css';

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
                    (<section className='sectionItem'>
                        <ItemDetail item={product}/>
                    </section>)
                :("Loading...")
            }
            
        </>
    );
};

export default ItemDetailContainer;