import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import portada from "../assets/portada.png";
import guia1 from "../assets/guia-1.png";
import guia2 from "../assets/guia2.png";
import guia3 from "../assets/guia-3.png";
import guia4 from "../assets/guia-4.jpeg";
const FAQ = () => {
    return (
        <>
            <div className="wrapper" style={{ maxWidth: "100%" }}>
                <Header />
                <div className="banner-productos">
                    <div className="portada">
                        <img src={portada} />
                        <p>Preguntas Frecuentes</p>
                    </div>
                </div>
                <div className="wrapper">
                    <h1 style={{ margin: "50px 0px" }}>Preguntas Frecuentes</h1>
                    <div style={{ display: "flex", flexDirection: "column", margin: "20px 0px" }}>
                        <h2>¿Cómo están hechas las bicicletas JAVA?</h2>
                        <p>Son fabricadas por JAVA BICYCLES (HK) CO.,LTD en Shenzhen, China, con diseño italiano, observando los más altos estándares de calidad e importadas por Global Eco Business SAS.</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", margin: "20px 0px" }}>
                        <h2>¿Mi pago es seguro?</h2>
                        <p>Claro que sí, Nuestra pasarela de pagos es ePayco y contamos con todo el respaldo de su plataforma para garantizarte compras seguras.</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", margin: "20px 0px" }}>
                        <h2>¿Puedo realizar Cambios?</h2>
                        <p>Si, Para efectuar cualquier tipo de cambio, reclamación o garantía debes presentar tu factura o comprobante de pago. Para el caso de cambios el producto debe estar completamente nuevo, sin marcas de uso. Los costos de envío correrán por cuenta del comprador. <a>Saber mas.</a></p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", margin: "20px 0px" }}>
                        <h2>¿Cuál es la talla de bicicleta que debo usar de acuerdo a mi altura?</h2>
                        <p>Te explicamos que medidas debes tener en cuenta para poder comprar una bicileta para tus medidas</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", margin: "20px 0px" }}>
                        <h2>¿Puedo encargar otro modelo de bicicleta?</h2>
                        <p>Sí es posible, comuniquese con nosotros y cuéntenos su necesidad.
                        Si tiene otras preguntas más específicas, por favor comuníquese con nosotros a través de nuestro Whatsapp o número telefónico.</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", margin: "20px 0px" }}>
                        <h2>Guía de bicicletas de Montaña MTB</h2>
                        <img src={guia1} width={300} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", margin: "20px 0px" }}>
                        <h2>Guía de bicicletas de Ruta SILURO</h2>
                        <img src={guia2} width={300} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", margin: "20px 0px" }}>
                        <h2>Guía de bicicletas de Ruta Fuoco Top</h2>
                        <img src={guia3} width={300} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop:20, marginBottom: 40}}>
                        <h2>Guía de bicicletas de Ruta SILURO 6 TOP</h2>
                        <img src={guia4} width={300} />
                    </div>
                    
                </div>
                <Footer />
            </div >
        </>
    );
}

export default FAQ;