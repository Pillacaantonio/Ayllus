import React, { Component } from "react";
import sala from './img/sala_1.jpeg'
import premacion1 from './img/premiacion.jpeg'
import premacion2 from './img/premiacion_2.jpeg'
class Historia extends Component {
    render() {
        return (
            <div className="historia">
                <div className="historia-resumen">
                    <p className="titulo"> HISTORIA </p>
                    <h1>RESTAURENTE AYLLUS</h1>
                    <br />
                    <p>El restaurante Ayllus, que significa familia en quechua, especializado en cocina tradicional peruana, presentó su amplia variedad de propuesta gastronómica a base de comida marina, criolla, de autor y parte de su propuesta con influencia de La carta nikkei, que no sólo resaltan por su calidad, sino también por la investigación de cada insumo, técnicas de cocción, color, entre otros, que se exponen en cada plato servido en Ayllus.</p>
                </div>
                <div className="historia-sala">
                    <img className="historia-sala" src={sala} />
                    <p>Desde hace más de 12 años Ayllus ofrece cocina tradicional peruana y fue fundado por los hermanos Pillaca (Amador, Isaías y Rodolfo), quienes gracias a su esfuerzo y dedicación, lograron obtener en el 2017 el primer puesto como tiradito innovador, en el 2018 el tercer puesto en el campeonato del ceviche y

                        El restaurante Ayllus, que significa familia en quechua, especializado en cocina tradicional peruana, presentó su amplia variedad de propuesta gastronómica a base de comida marina, criolla, de autor y parte de su propuesta con influencia de La carta nikkei, que no sólo resaltan por su calidad, sino también por la investigación de cada insumo, técnicas de cocción, color, entre otros, que se exponen en cada plato servido en Ayllus.</p>

                </div>
                <div className="premiacion-1">
                    <div className="imgpremacion-1">
                        <img className="imgpremacion-1" src={premacion1} />
                    </div>
                    <div className="descripcion1">
                        <h1>2018</h1>

                        <p>ganador del prenio de lideres del bicentenario</p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />

                        <br />
                        <h1>2018</h1>

                        <p>ganador de del mejor restaurante de jesus maria</p>

                    </div>


                </div>
                <br />
                <div className="premiacion-2">
                    <div className="imgpremacion-2">
                        <img src={premacion2} />

                    </div>
                    <div className="descripcion2">
                        <h1>2022</h1>
                        <p>Ganador de mejor ceviche de lima metropolitana</p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <h1>2023</h1>
                        <p>Ganador del mejor tiradito innovador de lima metropolitana</p>


                    </div>


                </div>

            </div>
        )
    }
}
export default Historia;