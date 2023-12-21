import { Component } from "react";
import bar from './img/bar.jpg';
import vino from './img/vino.jpg';
import fachada from './img/fachada.jpeg';
import libro from './img/libro de reclamacion.png';
import img1 from './img/causa_anticuchera.jpg';
import img2 from './img/tacu_seco2.jpg';
import Mapa from "./Mapa";
import Footer from "./Footer"
const lista =[img1,img2];

class Inicio extends Component {
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
            <div className="inicio">
               
                <div className="Section1">
                    
                    <div className="section1">
                        <p >Lo mejor de la comida criolla</p>
                        <h1>Arroz con pato</h1>
                        <h4>precione en el boton para pedir</h4>
                        <a href="./Carta">Ver carta</a>

                    </div>
                    <div className="section2">
                        <img className="imginicio" src={lista[this.state.c]} alt="" />

                    </div>
                </div>
                <div className="Section2">
                    <p className="parrafo">Desde hace más de 12 años Ayllus ofrece cocina tradicional peruana y fue fundado por los hermanos Pillaca (Amador, Isaías y Rodolfo), quienes gracias a su esfuerzo y dedicación, lograron obtener en el 2017 el primer puesto como tiradito innovador, en el 2018 el tercer puesto en el campeonato del ceviche y</p>

                    <p className="parrafo">El restaurante Ayllus, que significa familia en quechua, especializado en cocina tradicional peruana, presentó su amplia variedad de propuesta gastronómica a base de comida marina, criolla, de autor y parte de su propuesta con influencia de La carta nikkei, que no sólo resaltan por su calidad, sino también por la investigación de cada insumo, técnicas de cocción, color, entre otros, que se exponen en cada plato servido en Ayllus.
                    </p>
                </div>
                <div className="Section3">
                    <div>
                        <img className="bar" src={bar} alt="" />
                        <div className="sectiontexto">
                            <h1>LA COCINA</h1>
                            <p>Lo mejor de la distancia es el reencuentro.

                            </p>
                            <p>Las formas cambian, pero el espíritu se mantiene: seguimos enamorados de la cocina peruana. Hoy, más que nunca, queremos compartir ese sentimiento contigo.</p>
                            <a href="./Carta"><h3>Conoce Nuestras Propuestas</h3></a>
                        </div>
                    </div>
                    <div>
                        <img className="cocina" src={vino} alt="" />
                        <div className="sectiontexto">
                            <h1>BAR</h1>
                            <p>Lo mejor de la distancia es el reencuentro.

                            </p>
                            <p>Un corazón que late fuerte y con vida propia. Cocteles clásicos y creativos llegarán ahora a tu casa.</p>
                            <a href="./Carta"><h3>Conoce Nuestras Propuestas</h3></a>
                        </div>
                    </div>
                </div>
                <div className="Section4">
                    <img src={fachada} alt="" />

                    <div className="section4text">
                        <h1>Pedidos y reservas</h1>
                        <p>
                            Para realizar una reserva o un pedido, haga click en el botón</p>

                        <p>Pide o reserva aquí</p>

                        <a href="#"> T. +511 940 287 861</a>


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
                        <h4><a href="tel:+51940287861" target="new">CONTACTO</a></h4>
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
                        <form id="frmregistro"> 
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
               

                </form>


                    </div>
                   
                </div>
               
                <Mapa></Mapa>
                <Footer></Footer>
             
            </div>






        )
    }
}
export default Inicio;