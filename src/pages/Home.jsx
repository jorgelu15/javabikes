import Header from "../components/layout/Header";
import presentation2 from "../assets/presentation2.mp4";
import presentation from "../assets/presentation.mp4";
import bici1 from "./../assets/bici1.png";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import portada from "../assets/portada.png";
import iconoItalia from "../assets/icon-italia.png";
import iconoEnviosNacionales1 from "../assets/icono-envios-nacionales-1.png";
import iconoEnviosRapidos1 from "../assets/icono-envios-rapidos-1.png";
import Footer from "../components/layout/Footer";
import prev from "../assets/prev.png";
import next from "../assets/next.png";
import { useState } from "react";

const Home = () => {
    const bikes = [
        {
            id: 1,
            name: "JAVA Siluro 6 Top Up",
            image: bici1
        },
        {
            id: 2,
            name: "JAVA Fuoco Top",
            image: bici1
        },
        {
            id: 3,
            name: "JAVA SILURO 3D",
            image: bici1
        },
        {
            id: 4,
            name: "JAVA Siluro 6 Top",
            image: bici1
        },
        {
            id: 5,
            name: "JAVA SILURO 3D",
            image: bici1
        },
        {
            id: 6,
            name: "JAVA Siluro 6 Top",
            image: bici1
        }
    ]
    const [currentTranslate, setCurrentTranslate] = useState(0);
    const gap = 20;
    const cardWidth = 400; // Ancho de la tarjeta sin el gap
    const maxTranslate = -(bikes?.length - 3) * (cardWidth + gap);
    const handlePrev = () => {
        setCurrentTranslate((prev) => {
            const nextTranslate = prev + (cardWidth + gap);
            return Math.min(nextTranslate, 0); // Evita desplazarse más allá del inicio
        });
    };

    const handleNext = () => {
        setCurrentTranslate((prev) => {
            const nextTranslate = prev - (cardWidth + gap);
            return Math.max(nextTranslate, maxTranslate); // Evita desplazarse más allá del final
        });
    };


    return (
        <div style={{ maxWidth: "100%", width: "100%" }}>
            <Header />
            <div className="banner">
                <video autoPlay muted loop>
                    <source src={presentation2} type="video/mp4" />
                    Tu navegador no soporta la reproducción de videos.
                </video>
                <div className="welcome-message">
                    <h1>Siente la velocidad, domina el camino</h1>
                </div>
            </div>
            <div className="about-section">
                <div className="about-content">
                    <h1>Directo de Italia</h1>
                    <p>Tenemos lo mejor para los mejores en alto rendimiento</p>
                    <p>
                        Las bicicletas JAVA son más que solo máquinas de pedalear; representan una
                        tradición de calidad, innovación y pasión por el ciclismo. Desde su humilde
                        inicio hasta su prominencia en la industria, la historia de las bicicletas JAVA
                        es una historia inspiradora de determinación y excelencia en el mundo del
                        ciclismo.
                    </p>
                </div>
                <div className="features-box">
                    {/* <p>Calidad y diseño con meticulosidad y cuidado para crear modelos únicos y atractivos</p>
                    <p>Sostenibilidad y el respeto por el medio ambiente</p>
                    <p>Los diseñadores se inspiran en la naturaleza y el arte</p> */}
                    <video autoPlay muted loop>
                        <source src={presentation} type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                </div>
            </div>
            <div className="slider" style={{margin: "200px auto"}}>
                <p  className="title">Bicicletas de Ruta en Carbono</p>
                <div className="slides">
                    <div>
                        <h1>JAVA Siluro 6 Top Up</h1>
                        <p>Sálgase de lo común, monte una bicicleta de diseño Italiano...</p>
                        <div className="price-info">
                            <p>Precio:</p>
                            <p>
                                Antes: <span className="old-price">$ 8,990,000</span>
                                Ahora <span className="new-price">$ 7,990,000</span>
                            </p>
                        </div>
                        <div className="color-options">
                            <p>Color:</p>
                            <div>
                                <span style={{ backgroundColor: "yellow" }}></span>
                                <span style={{ backgroundColor: "red" }}></span>
                                <span style={{ backgroundColor: "blue" }}></span>
                            </div>
                        </div>
                        <div className="buttons">
                            <div>Añadir al carrito</div>
                            <div>Ver más</div>
                        </div>
                    </div>
                    <div>
                        <img src={bici1} alt="Bicicleta" />
                    </div>
                </div>
            </div>

            <div className="wrapper" style={{ margin: "100px auto 100px auto", overflow: "hidden" }}>
                <p style={{ textAlign: "center", fontSize: 58 }}>Nuestro Stock</p>
                <div>
                    <button onClick={handlePrev} className="slider-button prev"><img src={prev} /></button>
                    <div className="products" style={{
                        transform: `translateX(${currentTranslate}px)`,
                        transition: "transform 0.5s ease-in-out",
                    }}>
                        {bikes?.map((_, index) => (
                            <div className="card" key={index}>
                                <img src={_.image} alt="Fuoco" />
                                <div>
                                    <h2>{_.name}</h2>
                                    <p>Antes $ 8,990,000 Ahora $ 7,990,000</p>
                                </div>
                            </div>
                        ))}

                    </div>
                    <button onClick={handleNext} disabled={currentTranslate === maxTranslate} className="slider-button next"><img src={next} /></button>
                </div>
            </div>
            <div className="wrapper">
                <div className="portada" style={{ backgroundImage: `url(${portada})` }}>
                    <div className="card-portada ">
                        <img src={iconoItalia} alt="Diseño italiano" />
                        <p>
                            El diseño de las bicicletas Java es otro elemento distintivo. Los diseñadores se inspiran en la naturaleza y el arte para crear modelos únicos y atractivos. Cada bicicleta está cuidadosamente elaborada para ofrecer un equilibrio perfecto entre estilo y funcionalidad, brindando una experiencia de conducción excepcional.
                        </p>
                    </div>
                    <div className="card-portada ">
                        <img src={iconoEnviosNacionales1} alt="Entregas nacionales" />
                        <p>Realizamos entregas de tu bici a todo el territorio nacional</p>
                    </div>
                    <div className="card-portada ">
                        <img src={iconoEnviosRapidos1} alt="Altos estándares de calidad" />
                        <p>Tenemos los estándares de calidad más altos en cuanto a envíos seguros y rápidos</p>
                    </div>
                </div>
            </div>
            <div className="wrapper" >
                <div style={{ width: "100%", display: "flex", justifyContent: "flex-end", margin: "20px 0" }}>
                    <a className="boton-contacto">Contactanos</a>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
