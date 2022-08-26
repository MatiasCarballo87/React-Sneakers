import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
    const onAdd = (cant) => {
        alert("Añadiste " + cant + " items al carrito.");
    }
    
    return(
        <>
            <div className="aviso">
                <h1>{props.greeting}</h1>
                <p>Pronto encontraran sus Sneakers preferidos!</p>
            </div>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </>
    );
}

export default ItemListContainer;