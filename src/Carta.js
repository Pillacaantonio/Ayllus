import React, { Component } from "react";
import tacutacu from './img/tacu_pizarro.jpg'
import img1 from './img/tacu_seco.jpg'
import img2 from './img/cevichecarretilla.jpeg'
import img3 from './img/arroz_pato.jpg'
import vino from './img/vinobotella.jpg'
import libro from './img/libro de reclamacion.png'
import ReactPlayer from "react-player";
import Mapa from "./Mapa";
import Footer from "./Footer";
const lista =[img1,img2,img3];








class Carta extends Component {
    state ={
        c:null
    }
    constructor(props){
        super(props);
        this.state={
            c:0
        }
    }
    componentDidMount(){
        const ciclo=setInterval(()=>{
            this.setState(prevState =>{
                return{
                    c:(prevState.c+1) %lista.length==0 ? 0 : prevState.c+1
                }
            })
        },1000)
    }
    Mostrar =(e)=>{
        let nombre =document.getElementById('txtnombre').value;
        let apellido = document.getElementById('txtapellido').value;
        let queja = document.getElementById('txtqueja').value;
    
        
    
        alert (nombre+'\n'+apellido+'\n'+queja)
    }
    
    render() {
        return (
            <div className="carta">
                <div className="cartaimagen">
                    <img className="tacutacu" src={tacutacu} />
                    <h1 className="titulocarta">La Carta</h1>
                </div>
                
                <div className="textocarta">
                    <p>Volver a empezar</p>
                    <p>Nuestro fuego nunca se apagó. Hoy abrimos nuevamente nuestras puertas con nuevos y amplios espacios, el mundo dulce de Astrid, y una carta que viaja en el tiempo hacia un mismo destino: el amor por la cocina peruana.</p>

                </div>
                <div className="carrusel" >

                    <img className="carrusel1" src={lista[this.state.c]} />
                     <ReactPlayer
                     url={require("./video/videoportada.mp4")}
                     width="100%"
                     height="100%"
                     
                     playing
                     muted
                     loop
                     />
                    
                </div>
                <div className="cartamenu">
                    <div className="menucarta">
                        <h1>Nuestra Carta</h1>
                        <br />
                        <p>Nuestra Carta de Salón</p>
                      <br />
                        <h5>Menú Degustación AYLLUS</h5>
                     <br />
                        <p><a href="https://docs.google.com/document/d/1RgMmumDCbnui-JM61kDBhZemCotlZlLhuvXgt-Pcvbo/edit?usp=sharing" target="new">Encuentra aquí la carta</a></p>
                    </div>
                    <div className="menuimagen">
                        <img className="menuimagen" src={img3} alt="" />

                    </div>

                </div>
                <div className="cartavino">
                    <div className="imagenvino">
                        <img className="imagenvino" src={vino} alt="" />


                    </div>
                    <div className="vinocarta">
                        <h1>Vinos</h1>
                        <br />
                        <p>Nuestro equipo de sumilleres ha recogido más de 250 referencias de todo el mundo para nuestra casa. Juntos, realizan recomendaciones personalizadas y una propuesta de maridaje para nuestro menú degustación.</p>

                    </div>

                </div>
                <div className="Footer">
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
                        <a ><img  className="libroReclamacion" src={libro} /></a>
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
export default Carta;