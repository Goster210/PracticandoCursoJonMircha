import React, {Component} from "react";

export default class Padre extends Component{

    state = {
        contador: 0
    }


incrementarContador = (e) => {

    this.setState({contador: this.state.contador+1})
}

render(){
    
    return(
        <div>
            <h1>COMUNICACION ENTRE COMPONETES</h1>
            <Hijo incrementarContador={this.incrementarContador} mensaje="¿Hola como estas?"/>
            <h2>{this.state.contador}</h2>
        </div>
    )

}

}

function Hijo (props){
    return(
        <div>
        <h3 >{props.mensaje}</h3>
        <button onClick={props.incrementarContador}>Hola incrementame</button>
        
        </div>
    )
}