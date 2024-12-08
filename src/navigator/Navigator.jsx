import { Routes, Route } from "react-router-dom";
import { routes } from "../helpers/Routes";
import Home from "../pages/Home";
import Productos from "../pages/Productos";
import Nosotros from "../pages/Nosotros";
import Contacto from "../pages/Contacto";
import FAQ from "../pages/FAQ";
import Producto from "../pages/Producto";
import Administracion from "../pages/Administracion";
import Login from "../pages/Login";

const Navigator = () => {
    return (
        <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.bicicletas} element={<Productos />} />
            <Route path={routes.nosotros} element={<Nosotros />} />
            <Route path={routes.contacto} element={<Contacto />} />
            <Route path={routes.faq} element={<FAQ />} />
            <Route path={routes.producto} element={<Producto />} />
            <Route path={routes.administracion} element={<Administracion />} />
            <Route path={routes.login} element={<Login />} />
            
        </Routes>
    );
}

export default Navigator;