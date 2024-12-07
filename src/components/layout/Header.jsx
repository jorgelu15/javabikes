import logo from "../../assets/logo.png";
import cart from "../../assets/cart.png";
import { Link } from "react-router-dom";
import { routes } from "../../helpers/Routes";
const Header = () => {
    return ( 
        <header>
            <div className="navbar-nav">
                <nav>
                    <div>
                        <a><img src={logo} width={200} /></a>
                    </div>
                    <div>
                        <Link to={routes.home}>Inicio</Link>
                        <Link to={routes.bicicletas}>Bicicletas</Link>
                        <Link  to={routes.nosotros}>Nosotros</Link>
                        <Link  to={routes.contacto}>Contacto</Link>
                        <a href="#">Faq</a>
                    </div>
                    <div>
                        <a href="#"><img src={cart} width={24} /></a>
                    </div>
                </nav>
            </div>
        </header>
     );
}
 
export default Header;