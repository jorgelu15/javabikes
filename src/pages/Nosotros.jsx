import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import portada from "../assets/portada.png";
import misionVision from "../assets/nosotros-1.jpg";
import misionVision2 from "../assets/nosotros-2.jpg";
import misionVision3 from "../assets/nosotros-3.jpg";
import misionVision4 from "../assets/nosotros-4.jpg";


const Nosotros = () => {
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
                <div className="wrapper" style={{ display: "flex", flexDirection: "row", marginTop: 50, marginBottom: 50 }}>
                    <div className="mision-vision">
                        <div style={{ marginBottom: 50, paddingRight: 20 }}>
                            <h2>Mision</h2>
                            <p style={{ fontSize: 20 }}>Ser líderes globales en la industria del ciclismo, reconocidos por la calidad, innovación y diseño de nuestras bicicletas, fomentando una comunidad apasionada por el ciclismo y el respeto al medio ambiente. Aspiramos a inspirar a ciclistas de todas las edades y niveles a alcanzar nuevas metas y descubrir el mundo desde dos ruedas.</p>
                        </div>
                        <hr style={{ marginBottom: 50, marginRight: 20, paddingRight: 20 }} />
                        <div style={{ paddingRight: 20 }}>
                            <h2>Vision</h2>
                            <p style={{ fontSize: 20 }}>Ofrecer bicicletas de alta calidad que combinan diseño innovador, tecnología avanzada y durabilidad. Promovemos el ciclismo como un estilo de vida saludable, sostenible y accesible, apoyando a nuestros clientes en cada pedalada de su viaje, mientras preservamos nuestra pasión y compromiso con la excelencia en cada modelo que producimos.</p>
                        </div>
                    </div>
                    <div className="mision-img">
                        <img src={misionVision} />
                    </div>
                </div>
                <div className="wrapper" style={{ textAlign: "center" }}>
                    <h2>Valores</h2>
                    <h3 style={{ fontSize: 42 }}>Nos conectan</h3>
                    <p style={{ fontSize: 20 }}>Cumplir con el trabajo diario es nuestra pasión y la felicidad de los clientes nuestra mayor satisfacción como empresa.</p>
                    <div class="container-card-nosotros">
                        <div class="card-nosotros">
                            <h2>PERSONAS</h2>
                            <p>
                                Creemos que el ciclismo conecta a las personas y fomenta comunidades más fuertes.
                                Valoramos el bienestar de nuestros colaboradores, clientes y ciclistas, promoviendo
                                un ambiente inclusivo y de apoyo.
                            </p>
                        </div>
                        <div class="card-nosotros">
                            <h2>COMPROMISO</h2>
                            <p>
                                Nos dedicamos a la excelencia en cada paso, desde el diseño hasta la entrega de nuestras bicicletas.
                                Nuestro compromiso se refleja en la calidad, la innovación y la sostenibilidad de nuestros productos y procesos.
                            </p>
                        </div>
                        <div class="card-nosotros">
                            <h2>PASIÓN</h2>
                            <p>
                                La pasión por el ciclismo es el motor que impulsa cada decisión que tomamos. Celebramos el espíritu aventurero
                                de nuestros clientes, inspirándolos a superar límites y disfrutar de cada pedalada.
                            </p>
                        </div>
                        <div class="card-nosotros">
                            <h2>EL CLIENTE</h2>
                            <p>
                                Escuchamos, entendemos y valoramos las necesidades de nuestros clientes. Ellos son el centro de todo lo que hacemos,
                                y nuestro objetivo es superar sus expectativas en calidad, servicio y experiencia.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="gallery">
                        <img src={misionVision} />
                        <img src={misionVision2} />
                        <img src={misionVision3} />
                        <img src={misionVision4} />
                    </div>

                </div>
                <Footer />
            </div>

        </>
    );
}

export default Nosotros;
