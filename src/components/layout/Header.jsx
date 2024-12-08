import logo from "../../assets/logo.png";
import cart from "../../assets/cart.png";
import dashboard from "../../assets/dashboard.png";
import { Link } from "react-router-dom";
import { routes } from "../../helpers/Routes";
const Header = () => {
    return ( 
        <header>
            <div className="navbar-nav">
                <nav>
                    <div>
                        <Link to={routes.home}><img src={logo} width={200} /></Link>
                    </div>
                    <div>
                        <Link to={routes.home}>Inicio</Link>
                        <Link to={routes.bicicletas}>Bicicletas</Link>
                        <Link  to={routes.nosotros}>Nosotros</Link>
                        <Link  to={routes.contacto}>Contacto</Link>
                        <Link  to={routes.faq}>FAQ</Link>
                    </div>
                    <div>
                        <a href="#"><img src={cart} width={24} /></a>
                        <Link to={routes.administracion}><img src={dashboard} width={24} /></Link>
                    </div>
                </nav>
            </div>
        </header>
     );
}
 
export default Header;