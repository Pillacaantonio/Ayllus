import  { Component } from "react";
import { Link,Outlet } from "react-router-dom";
import logo from './img/logo.png'

class Menu extends Component{
    render(){
        return(
            <div>
                <div className="menu">
                    <img className="logo" src={logo} alt="" />
                    <Link className="link-inicio" to="/">Inicio</Link>
                    <Link className="link-inicio" to="/Carta">La Carta</Link>
                    <Link className="link-inicio" to="/Equipo">Equipo</Link>
                    <Link className="link-inicio" to="/Historia">Historia</Link>
                    <Link className="link-inicio" to="/Contactanos">Contactanos</Link>

                </div>
                <Outlet/>

            </div>
        )
    }
}
export default Menu;