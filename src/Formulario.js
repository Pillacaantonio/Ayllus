import { Component } from "react";


class Formulario extends Component{
 Mostrar= (e)=>{
    let nombre=document.getElementById('txtnombre').value;
    let apellido=document.getElementById('txtapellido').value;

    alert(nombre+'\n'+apellido)
 }

    render(){
        return(
            <div>
                <h1>asd</h1>

            </div>
        )
    }
} 