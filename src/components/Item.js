import { Link } from 'react-router-dom';

const Item = (props) => {

    return (
        <>
            <Link to={`/item/${props.id}`}><div className="card">
                <div className="content-img">
                    <img src={props.image} className="img-card" alt="" />
                </div>
                <div className="card-desc">
                    <h3>{props.name}</h3>
                    <p className='main-price'>${props.price}</p>
                </div>
            </div></Link>
        </>

    )
}
export default Item;