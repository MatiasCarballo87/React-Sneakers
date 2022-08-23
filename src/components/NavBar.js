import logo from '../assets/sneaker-logo.jpg'

const NavBar = () => {
    return(
        <>
        <main className="container">
            <div className='main-logo'>
                <header>
                    <img src={logo} className="Img-logo" alt="logosneaker"/>
                </header>
            </div>
            <nav>
                <div className="Navbar">
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
                </div>    
            </nav>
        </main>
        </>
    );
}

export default NavBar;