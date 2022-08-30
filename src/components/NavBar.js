import logo from '../assets/sneaker.png'
import CartWidget from './Cartwidget';

const NavBar = () => {
    return(
        <>
        <main className="container">
            <nav>
                <div className="Navbar">
                    <div className='main-logo'>
                        <header>
                            <img src={logo} className="Img-logo" alt="logosneaker"/>
                        </header>
                    </div>
                    <div className="Navbar-collapse">
                        <ul className="Nav-list">
                            <li>
                                <a href='./index.html'>JORDAN</a>
                            </li>
                            <li>
                                <a href='./index.html'>NIKE</a>
                            </li>
                            <li>
                                <a href='./index.html'>ADIDAS</a>
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