import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import portada from "../assets/portada.png";
import misionVision from "../assets/nosotros-1.jpg";
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
                        <div style={{marginBottom: 50, paddingRight: 20}}>
                            <h2>Mision</h2>
                            <p style={{fontSize: 20}}>Ser líderes globales en la industria del ciclismo, reconocidos por la calidad, innovación y diseño de nuestras bicicletas, fomentando una comunidad apasionada por el ciclismo y el respeto al medio ambiente. Aspiramos a inspirar a ciclistas de todas las edades y niveles a alcanzar nuevas metas y descubrir el mundo desde dos ruedas.</p>
                        </div>
                        <hr style={{marginBottom: 50, marginRight: 20, paddingRight: 20}} />
                        <div style={{paddingRight: 20}}>
                            <h2>Vision</h2>
                            <p style={{fontSize: 20}}>Ofrecer bicicletas de alta calidad que combinan diseño innovador, tecnología avanzada y durabilidad. Promovemos el ciclismo como un estilo de vida saludable, sostenible y accesible, apoyando a nuestros clientes en cada pedalada de su viaje, mientras preservamos nuestra pasión y compromiso con la excelencia en cada modelo que producimos.</p>
                        </div>
                    </div>
                    <div className="mision-img">
                        <img src={misionVision} />
                    </div>
                </div>
                <Footer />
            </div>

        </>
    );
}

export default Nosotros;