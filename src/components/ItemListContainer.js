import { useEffect, useState } from "react";
import promesa from '../utils/promise';
import {data} from '../utils/data';
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        promesa(data)
            .then(result => setProducts(result))
            .catch(err => console.log(err))
    })
    
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