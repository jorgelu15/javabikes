import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import portada from "../assets/portada.png";
const Contacto = () => {
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
                <div className="wrapper">
                    <div>
                        <h1>Contacta con nosotros</h1>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <div className="form-contact">
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <label>Nombre</label>
                                    <input type="text" placeholder="Escribe tu nombre" />
                                </div>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <label>Correo electronico</label>
                                    <input type="text" placeholder="Escribe tu nombre" />
                                </div>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <label>¿Cómo podemos ayudarte?</label>
                                    <textarea placeholder="Escribe tu mensaje"></textarea>
                                </div>
                                <div>
                                    <button className="btn">Enviar</button>
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

export default Contacto;