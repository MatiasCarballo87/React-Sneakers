import { useEffect, useState } from "react";
import promesa from '../utils/promise';
import {data} from '../utils/data';
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    const { Id } = useParams();

    useEffect(() => {
        if (Id) {
        promesa(data.filter(item => item.categoryId === Id))
            .then(result => setProducts(result))
            .catch(err => console.log(err))
        } else {
        promesa(data)
            .then(result => setProducts(result))
            .catch(err => console.log(err))
        }
    }, [Id]);
    
    return(
        <>
            <section>
                <h1 className="aviso">{props.greeting}</h1>  
                <div className="cards-content">
                    <ItemList items={products} />
                </div>
            </section>
        </>
    );
}

export default ItemListContainer;