import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import portada from "../assets/portada.png";
import imagepreview from "../assets/image.png"
import bici1 from "../assets/bici1.png"
import dashboard from "../assets/dashboard.png"
import inventory from "../assets/inventory.png"
import Modal from "../components/Modal"
import { useState } from "react";
const Administracion = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const productData = [
        {
            "imagepreview": "https://via.placeholder.com/20",
            "nombre": "Bicicleta de Ruta JAVA Siluro 6 Top Up",
            "sku": "123456",
            "inventario": 10,
            "precio": "$1000",
            "categorias": "Deportiva",
            "fecha": "2023-01-01"
        },
        {
            "imagepreview": "https://via.placeholder.com/20",
            "nombre": "Bicicleta de Montaña Scott Scale 970",
            "sku": "789012",
            "inventario": 5,
            "precio": "$1200",
            "categorias": "Montaña",
            "fecha": "2023-02-15"
        },
        {
            "imagepreview": "https://via.placeholder.com/20",
            "nombre": "Bicicleta Urbana Trek FX 3 Disc",
            "sku": "345678",
            "inventario": 8,
            "precio": "$850",
            "categorias": "Urbana",
            "fecha": "2023-03-10"
        },
        {
            "imagepreview": "https://via.placeholder.com/20",
            "nombre": "Bicicleta de Carrera Specialized Allez Sprint",
            "sku": "901234",
            "inventario": 3,
            "precio": "$1500",
            "categorias": "Carrera",
            "fecha": "2023-04-20"
        }
    ]

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
                                <nav className="nav-lateral">
                                    <a style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}><img src={dashboard} width={20} />Panel</a>
                                    <a style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}><img src={inventory} width={20} />Productos</a>
                                </nav>
                                <div style={{ background: "#2c2e2d", padding: 20, borderRadius: 3, width: "100%" }}>
                                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", outline: "none", margin: "20px 0" }}>
                                        <h2>Productos</h2>
                                        <button onClick={() => setIsModalOpen(true)}>Agregar</button>
                                    </div>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th><img src={imagepreview} width={20} /></th>
                                                <th>Nombre</th>
                                                <th>SKU</th>
                                                <th>Inventario</th>
                                                <th>Precio</th>
                                                <th>Categorias</th>
                                                <th>Colores</th>
                                                <th>Fecha</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><img src={bici1} width={40} /></td>
                                                <td>Bicicleta de Ruta JAVA Siluro 6 Top Up</td>
                                                <td>123456</td>
                                                <td>10</td>
                                                <td>$1000</td>
                                                <td>Deportiva</td>
                                                <td>Azul, Negro, Blanco</td>
                                                <td>2023-01-01</td>
                                            </tr>
                                            <tr>
                                                <td><img src={bici1} width={40} /></td>
                                                <td>Bicicleta de Ruta JAVA Siluro 6 Top Up</td>
                                                <td>123456</td>
                                                <td>10</td>
                                                <td>$1000</td>
                                                <td>Deportiva</td>
                                                <td>Azul, Negro, Blanco</td>
                                                <td>2023-01-01</td>
                                            </tr>
                                            <tr>
                                                <td><img src={bici1} width={40} /></td>
                                                <td>Bicicleta de Ruta JAVA Siluro 6 Top Up</td>
                                                <td>123456</td>
                                                <td>10</td>
                                                <td>$1000</td>
                                                <td>Deportiva</td>
                                                <td>Azul, Negro, Blanco</td>
                                                <td>2023-01-01</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <Footer />
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    data={productData}
                />
            </div >
        </>
    );
}

export default Administracion;