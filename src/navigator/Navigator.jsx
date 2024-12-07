import { Routes, Route } from "react-router-dom";
import { routes } from "../helpers/Routes";
import Home from "../pages/Home";
import Productos from "../pages/Productos";
import Nosotros from "../pages/Nosotros";

const Navigator = () => {
    return (
        <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.bicicletas} element={<Productos />} />
            <Route path={routes.nosotros} element={<Nosotros />} />
        </Routes>
    );
}

export default Navigator;