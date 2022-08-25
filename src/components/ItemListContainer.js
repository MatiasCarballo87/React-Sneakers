

const ItemListContainer = (props) => {
    return(
        <>
            <div className="aviso">
                <h1>{props.greeting}</h1>
                <p>Pronto encontraran sus Sneakers preferidos!</p>
            </div>
        </>
    );
}

export default ItemListContainer;