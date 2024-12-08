import { Routes, Route } from "react-router-dom";
import { routes } from "../helpers/Routes";
import Home from "../pages/Home";
import Productos from "../pages/Productos";
import Nosotros from "../pages/Nosotros";
import Contacto from "../pages/Contacto";
import FAQ from "../pages/FAQ";

const Navigator = () => {
    return (
        <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.bicicletas} element={<Productos />} />
            <Route path={routes.nosotros} element={<Nosotros />} />
            <Route path={routes.contacto} element={<Contacto />} />
            <Route path={routes.faq} element={<FAQ />} />
        </Routes>
    );
}

export default Navigator;