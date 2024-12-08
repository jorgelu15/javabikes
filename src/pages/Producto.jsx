import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import portada from "../assets/portada.png";
const Producto = () => {
    return ( 
        <>
            <div className="wrapper" style={{ maxWidth: "100%" }}>
                <Header />
                <div className="banner-productos">
                    <div className="portada">
                        <img src={portada} />
                        <p>Nosotros</p>
                    </div>
                </div>
                <Footer />
            </div >
        </>
     );
}
 
export default Producto;