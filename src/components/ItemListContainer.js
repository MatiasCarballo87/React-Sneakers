import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';
import { firestorePromise } from '../utils/firebaseConfig';
import './styles/ItemListContainer.css';

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    const { Id } = useParams();

    useEffect(() => {
        firestorePromise(Id)
            .then(result => setProducts(result))
            .catch(err => console.log(err))
    }, [Id]);   

    
    return(
        <>
            <section className="mainSection">
                { <h1 className="aviso">{props.greeting}</h1> }
                <div className="cards-content">
                    <ItemList items={products} />
                </div>
            </section>
        </>
    );
}

export default ItemListContainer;