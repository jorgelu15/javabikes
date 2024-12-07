import Header from "../components/layout/Header";
import portada from "../assets/portada.png";
import bike from "../assets/bici1.png";
import peso from "../assets/peso.png";
import llanta from "../assets/llanta.png";
import Footer from "../components/layout/Footer";
const Productos = () => {
    return (
        <>
            <div className="wrapper" style={{ maxWidth: "100%" }}>
                <Header />
                <div className="banner-productos">
                    <div className="portada">
                        <img src={portada} />
                        <p>Nuestros productos</p>
                    </div>
                </div>
                <div className="wrapper" style={{ backgroundColor: "rgb(80 24 27)", width: "100%", maxWidth: "100%" }}>
                    <div className="info-portada">
                        <h2>Nuestra gama de bicicletas</h2>
                        <p>Java Bikes ofrece bicicletas para todos.
                            Desde e-bikes y bicicletas de carretera de alto rendimiento hasta MTB y modelos urbanos diseñados para la movilidad diaria. También cuenta con una línea especial para niños, creada para acompañarlos en cada etapa de su crecimiento.
                            Con opciones de personalización, innovación y diseño de alta calidad, Java Bikes se posiciona como la compañera ideal para cualquier aventura.</p>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="container-productos">
                        <div className="card" style={{ boxShadow: "none", width: "40%", display: "flex", flexDirection: 'column' }}>
                            <img src={bike} />
                            <div>
                                <h2 style={{ fontSize: "32px" }}>Vesubio</h2>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <p style={{ display: "flex", alignItems: "center", margin: "0 40px" }}><img src={peso} style={{ width: "24px", marginRight: "10px" }} /> 11 kg</p>
                                    <p style={{ display: "flex", alignItems: "center", margin: "0 40px" }}><img src={llanta} style={{ width: "24px", marginRight: "10px" }} /> 20"</p>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ boxShadow: "none", width: "40%", display: "flex", flexDirection: 'column' }}>
                            <img src={bike} />
                            <div>
                                <h2 style={{ fontSize: "32px" }}>Vesubio</h2>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <p style={{ display: "flex", alignItems: "center", margin: "0 40px" }}><img src={peso} style={{ width: "24px", marginRight: "10px" }} /> 11 kg</p>
                                    <p style={{ display: "flex", alignItems: "center", margin: "0 40px" }}><img src={llanta} style={{ width: "24px", marginRight: "10px" }} /> 20"</p>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ boxShadow: "none", width: "40%", display: "flex", flexDirection: 'column' }}>
                            <img src={bike} />
                            <div>
                                <h2 style={{ fontSize: "32px" }}>Vesubio</h2>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <p style={{ display: "flex", alignItems: "center", margin: "0 40px" }}><img src={peso} style={{ width: "24px", marginRight: "10px" }} /> 11 kg</p>
                                    <p style={{ display: "flex", alignItems: "center", margin: "0 40px" }}><img src={llanta} style={{ width: "24px", marginRight: "10px" }} /> 20"</p>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ boxShadow: "none", width: "40%", display: "flex", flexDirection: 'column' }}>
                            <img src={bike} />
                            <div>
                                <h2 style={{ fontSize: "32px" }}>Vesubio</h2>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <p style={{ display: "flex", alignItems: "center", margin: "0 40px" }}><img src={peso} style={{ width: "24px", marginRight: "10px" }} /> 11 kg</p>
                                    <p style={{ display: "flex", alignItems: "center", margin: "0 40px" }}><img src={llanta} style={{ width: "24px", marginRight: "10px" }} /> 20"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Productos;