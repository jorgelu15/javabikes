import Header from "../components/layout/Header";
import presentation2 from "../assets/presentation2.mp4";
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

const Home = () => {
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
                    <p>Calidad y diseño con meticulosidad y cuidado para crear modelos únicos y atractivos</p>
                    <p>Sostenibilidad y el respeto por el medio ambiente</p>
                    <p>Los diseñadores se inspiran en la naturaleza y el arte</p>
                </div>
            </div>
            <div className="slider">
                <p style={{ textAlign: "center" }}>Bicicletas de Ruta en Carbono</p>
                <div style={{ marginBottom: 40 }}>
                    <div className="slides">
                        <div style={{ maxWidth: "40%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <Accordion sx={{ backgroundColor: "#5E64633D", color: "#fff", boxShadow: "none" }} defaultExpanded>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    Caracteristicas
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ul style={{ margin: 20 }}>
                                        <li>Peso: 11kg</li>
                                        <li>Tenedor: Carbono</li>
                                        <li>Tipo de marco: Aerodinamico de aluminio - Aprobado por la UCI - Cableado Totalmente Interno</li>
                                        <li>Tamaño de las Llantas: 700C - con eje pasante E-thru</li>
                                        <li>Frenos: Hidraúlicos L-two</li>
                                        <li>Grupo: Cambiador, descarrilador y tensor Shimano 105 7120 de 12 velocidades</li>
                                        <li>Manubrio: Integrado, DECAF, Aleación, 31.8*420</li>
                                        <li>Tamaño del Marco: 450 (XS), 480 (S), 500 (M), 520 (L)</li>
                                    </ul>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ backgroundColor: "#5E64633D", color: "#fff", boxShadow: "none" }} defaultExpanded>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2-content"
                                    id="panel2-header"
                                >
                                    Dimensiones
                                </AccordionSummary>
                                <AccordionDetails>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ backgroundColor: "#5E64633D", color: "#fff", boxShadow: "none" }} defaultExpanded >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3-content"
                                    id="panel3-header"
                                >
                                    Precio
                                </AccordionSummary>
                                <AccordionDetails>
                                    Antes 4.990.000 Ahora $4.590.000
                                </AccordionDetails>
                                <AccordionActions>
                                    <Button>Ver mas</Button>
                                    <Button>Agregar al carrito</Button>
                                </AccordionActions>
                            </Accordion>
                        </div>
                        <div>
                            <img src={bici1} width={800} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <p style={{ textAlign: "center", fontSize: 58 }}>Nuestro Stock</p>
                <div class="products">
                    <div class="card">
                        <h2>Fuoco</h2>
                        <img src={bici1} alt="Fuoco" />
                    </div>
                    <div class="card">
                        <h2>Fuoco</h2>
                        <img src={bici1} alt="Fuoco" />
                    </div>
                    <div class="card">
                        <h2>Fuoco</h2>
                        <img src={bici1} alt="Fuoco" />
                    </div>
                    <div class="card">
                        <h2>Vesuvio</h2>
                        <img src={bici1} alt="Vesuvio" />
                    </div>
                    <div class="card">
                        <h2>Vesuvio</h2>
                        <img src={bici1} alt="Vesuvio" />
                    </div>
                    <div class="card">
                        <h2>Vesuvio</h2>
                        <img src={bici1} alt="Vesuvio" />
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="portada" style={{ backgroundImage: `url(${portada})` }}>
                    <div class="card-portada ">
                        <img src={iconoItalia} alt="Diseño italiano" />
                        <p>
                            El diseño de las bicicletas Java es otro elemento distintivo. Los diseñadores se inspiran en la naturaleza y el arte para crear modelos únicos y atractivos. Cada bicicleta está cuidadosamente elaborada para ofrecer un equilibrio perfecto entre estilo y funcionalidad, brindando una experiencia de conducción excepcional.
                        </p>
                    </div>
                    <div class="card-portada ">
                        <img src={iconoEnviosNacionales1} alt="Entregas nacionales" />
                        <p>Realizamos entregas de tu bici a todo el territorio nacional</p>
                    </div>
                    <div class="card-portada ">
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
