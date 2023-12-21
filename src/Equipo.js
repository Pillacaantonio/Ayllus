import React, { Component } from "react";
import portada from './img/quipo2.jpeg';
import equipo from './img/salon.jpeg';
import cocina from './img/premiacion.jpeg';
import libro from './img/libro de reclamacion.png'
import Mapa from "./Mapa";
import Footer from "./Footer";



class Equipo extends Component {

    Mostrar =(e)=>{
        let nombre =document.getElementById('txtnombre').value;
        let apellido = document.getElementById('txtapellido').value;
        let queja = document.getElementById('txtqueja').value;
    
        
    
        alert (nombre+'\n'+apellido+'\n'+queja)
    }
    

    render() {
        return (

            <div className="equipo">
                <div className="portada-equipo">
                    <img className="portada-equipo" src={portada} alt="" />
                    <h1>Nuestro Equipo</h1>
                </div>
                <div className="nuestro-equipo">
                    <div className="reseña-equipo">
                        <h2>Salón</h2>
                        <br />
                        <p>Quizá el ingrediente más importante de toda experiencia: el servicio. Este equipo, conformado por profesionales de amplia trayectoria que incluye a miembros de la Escuela de Mozos de Pachacútec, está enteramente abocado a servir y guiar a nuestros visitantes.</p>
                    </div>
                    <div className="equipoimagen">
                        <img className="equipoimagen" src={equipo} alt="" />
                    </div>

                </div>
                <div className="equipococina">
                    <img className="equipococina" src={cocina} />
                    <p>Liderado por Nelson Pillaca, nuestro equipo de cocina está conformado principalmente por jóvenes llenos de experiencia, ideas nuevas y mucha creatividad. Su objetivo: servir platos del más alto estándar, mantener una constante investigación sobre nuestros recursos y conservar una relación de aprendizaje recíproco con productores locales.</p>

                </div>
                <div className="busqueda-trabajo">
                    <p>Buscamos constantemente nuevos talentos para unirse a nuestros equipos de cocina, salón y bar. Si estás interesado en trabajar o hacer una pasantía, por favor llena el formulario y envíanos tu CV, así podrás entrar a nuestro proceso de selección.</p>
                    <br />
                    <br />
                    <a href="#">Trabaja con Nosotros</a>
                </div>
                <div className="Footer"  >
                    <div className="footertex">
                        <h1>CONTACTO</h1>
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
                    <div className="footertex">
                        <h4><a href="">CONTACTO</a></h4>
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
                        <img className="libroReclamacion" src={libro} />
                        <table>
                    <tr>
                        <td>Nombre</td>
                        <td><input id="txtnombre" placeholder="Nombre" /></td>
                  
                        <td>Apellido</td>
                        <td><input id="txtapellido" placeholder="Apellido" /></td>
                    </tr>
                    <tr className="queja">
                      
                        <td>Motivo de queja</td>
                        <tr>
                        <td><input className="queja" type="text" id="txtqueja" /></td>
                    </tr>
                    </tr>
                  
                    <tr className="aceptar">
                        <td><button onClick={this.Mostrar}>Aceptar</button></td>
                    </tr>

                </table>


                    </div>
                </div>


<Mapa></Mapa>
<Footer></Footer>




          
            </div>




        )
    }
}
export default Equipo;