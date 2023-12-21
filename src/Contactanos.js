import React, { Component } from "react";
import Mapa from "./Mapa";

import fachada from './img/fachada.jpeg';
import Footer from "./Footer";

class Contactanos extends Component{
    render(){
        return(
            <div className="contactanos">
                <div className="contactanos">
                <img className="contactanos" src={fachada} />
                <h1>
                    CONTACTANOS
                </h1>
                </div>
                <div className="footer"  >
                    <div className="footertexto">
                        <h2>CONTACTO</h2>
                        <br />
                        <p>T. +511 442-2777</p>
                        <br />
                        <p>restaurante@ayllus.com</p><br />
                        <p>Ruc: 20509076945</p><br />
                        <p>Razón Social: CINCO MILLAS SAC</p>
                        <br />
                        <h4>
                            HORARIOS DE ATENCIÓN

                        </h4>
                        <br />

                        <p>En salón:
                        </p>
                        <p>De martes a sábado
                        </p>
                        <p>- Almuerzo - 01:00 p. m. a 3:30 p. m.
                        </p>
                        <p>- Cena - 7:00 p. m. a 11:00 p. m.
                        </p>
                        <p>Domingo de 12:00 m. a 4:00 p. m.
                        </p>
                        <br />
                        <p>Envío a domicilio y recojo en tienda:
                        </p>
                        <p>De martes a sábado
                        </p>
                        <p>- Almuerzo - 01:00 p. m. a 3:30 p. m.
                        </p>
                        <p>- Cena - 7:00 p. m. a 11:00 p. m.
                        </p>
                        <p>Domingo de 12:00 m. a 4:00 p. m.

                        </p>

                    </div>
                    <div className="footertexto">
                        <h4><a href="tel:+51 940 287 861" target="new">CONTACTO</a></h4>
                        <br />
                        <h4>KIT DE PRENSA</h4>
                        <p>Novedades, recortes, fotos y más.

                        </p>
                        <br />
                        <h4><a href="https://drive.google.com/drive/folders/1ekNqgRSQKiD3ibjNpqfS2Nt4OUcpKqW-?usp=sharing" target="new">DESCARGAR</a></h4><br />
                        <h4>TRABAJA CON NOSOTROS
                        </h4>
                        <p>Buscamos nuevos talentos para que sean parte de nuestra familia</p>
                        <br />
                        <h4><a href=""></a>POSTULAR</h4>
                     

                    </div>
                </div>
                <Mapa></Mapa>
                <Footer></Footer>

            </div>
            
        )
    }
}
export default Contactanos;