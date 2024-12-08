import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import portada from "../assets/portada.png";
const Administracion = () => {
    return (
        <>
            <div className="wrapper" style={{ maxWidth: "100%" }}>
                <Header />
                <div className="banner-productos">
                    <div className="portada">
                        <img src={portada} />
                        <p>Administración</p>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="info-contact">
                        <div style={{ width: "100%" }}>
                            <h1>Administración</h1>
                            <div style={{ display: "flex", flexDirection: "row", width: "100%", gap: 20 }}>
                                <nav style={{ display: "flex", flexDirection: "column", background: "#2c2e2d", padding: 20, borderRadius: 3, width: 200 }}>
                                    <a>Panel</a>
                                    <a>Productos</a>
                                </nav>
                                <div style={{ background: "#2c2e2d", padding: 20, borderRadius: 3, width: "100%" }}>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Nombre</th>
                                                <th>Correo</th>
                                                <th>Telefono</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Jorge</td>
                                                <td>Jorge@gmail.com</td>
                                                <td>3217694420</td>
                                            </tr>
                                            <tr>
                                                <td>Jorge</td>
                                                <td>Jorge@gmail.com</td>
                                                <td>3217694420</td>
                                            </tr>
                                        </tbody>
                                    </table>
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

export default Administracion;