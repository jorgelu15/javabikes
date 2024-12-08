import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import cart from "../../assets/cart.png";
import dashboard from "../../assets/dashboard.png";
import { routes } from "../../helpers/Routes";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // Cambia a true si el desplazamiento es mayor a 50px
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={isScrolled ? "scrolled-header" : ""}>
            <div className="navbar-nav">
                <nav>
                    <div>
                        <Link to={routes.home}><img src={logo} width={200} /></Link>
                    </div>
                    <div>
                        <Link to={routes.home}>Inicio</Link>
                        <Link to={routes.bicicletas}>Bicicletas</Link>
                        <Link to={routes.nosotros}>Nosotros</Link>
                        <Link to={routes.contacto}>Contacto</Link>
                        <Link to={routes.faq}>FAQ</Link>
                    </div>
                    <div>
                        <a href="#"><img src={cart} width={24} /></a>
                        <Link to={routes.administracion}><img src={dashboard} width={24} /></Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
