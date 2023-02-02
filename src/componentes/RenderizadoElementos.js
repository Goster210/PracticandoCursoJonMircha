import React, {Component} from "react";
import data from "../helpers/data.json";


function ElementoLista(props){
    return (
       <li>
        <a href={props.el.web} target="_blank">{props.el.name}</a>
       </li>
    )
}



export default class RenderizadoElementos extends Component{
    constructor(props){
        super(props)
        this.state={
            estaciones: ["Invierno","Primavera","Verano","Otoño"]
        }
    }

    render(){
        console.log(data)
        return(
            <div>
            <h1>Renderizado de Elementos</h1>
            <h3>Estaciones del año</h3>
            
                {this.state.estaciones.map((elemento) =>(
                <li key={elemento}>{elemento}</li>
                ))}
            
            <h3>Frameworks de trabajo</h3>
            <ul>{data.frameworks.map((el)=>(
            <ElementoLista key={el.id} el={el}/>
            ))}</ul>
            
            </div>
        )
    }

}
