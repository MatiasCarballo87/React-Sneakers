import Item from './Item';


const ItemList = (props) => {

    let items = props.items;

    return(
        <>
        {
            items.map((item) => (
                <Item
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    stock={item.stock}
                />
                ))
        }
        </> 
    );
}

export default ItemList;