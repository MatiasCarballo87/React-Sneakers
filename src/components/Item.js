import { Link } from 'react-router-dom';
import './styles/Item.css';

const Item = (props) => {

    return (
        <>
            <Link to={`/item/${props.id}`}><div className="card">
                <div className="content-img">
                    <img src={props.image} className="img-card" alt="sneaker" />
                </div>
                <div className='cont-mini'><img src={props.minimage} className="mini-img" alt="mini-logo" /></div>
                <div className="card-desc">
                    <h3>{props.name}</h3>
                    <strong><p className='main-price'>${props.price}</p></strong>
                </div>
            </div></Link>
        </>

    )
}
export default Item;