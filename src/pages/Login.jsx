import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import portada from "../assets/portada.png";
const Login = () => {
    return (
        <>
            <div className="wrapper" style={{ maxWidth: "100%" }}>
                <Header />
                <div className="banner-productos">
                    <div className="portada">
                        <img src={portada} />
                        <p>Iniciar Sesión</p>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="info-contact">
                        <div style={{ flex: "0 0 70%" }}>
                            <h1>Iniciar Sesión</h1>
                            <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                                <div className="form-contact">
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <label>Correo electrónico</label>
                                        <input type="text" placeholder="Escribe tu nombre" />
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <label>Contraseña</label>
                                        <input type="password" id="password" name="password" placeholder="Escribe tu contraseña" />
                                    </div>
                                    <div>
                                        <button className="btn">Iniciar Sesion</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        
                    </div>
                </div >
                <Footer />
            </div >
        </>
    );
}

export default Login;