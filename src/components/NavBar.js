import CartWidget from './Cartwidget';
import { Link } from 'react-router-dom';
import './styles/NavBar.css';

const NavBar = () => {
    return(
        <>
        <main className="container">
            <nav>
                <div className="Navbar">
                    <div className='main-logo'>
                        <header>
                            <Link to='/'><img src={'https://firebasestorage.googleapis.com/v0/b/react-sneaker-51ace.appspot.com/o/sneaker.png?alt=media&token=984875c1-d329-4747-be41-3b1d52aa7929'} className="Img-logo" alt="logosneaker"/></Link>
                        </header>
                    </div>
                    <div className="Navbar-collapse">
                        <ul className="Nav-list">
                            <li>
                                <Link to='category/Jordan'><p className='jordan'>JORDAN</p></Link>
                            </li>
                            <li>
                                <Link to='category/Nike'><p className='nike'>NIKE</p></Link>
                            </li>
                            <li>
                                <Link to='category/Adidas'><p className='adidas'>ADIDAS</p></Link>
                            </li>
                            <li>
                                <a href='./index.html' className='log'>LOGIN</a>
                            </li>
                        </ul>
                    </div>
                    <CartWidget />
                </div>    
            </nav>
        </main>
        </>
    );
}

export default NavBar;