import React from "react";


export default function PorpiedadesUno(props){

    return (
        <div>
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano}</li>
                <li>{props.arreglo.join("-")}</li>
                <li>{props.objeto.nombre+" "+props.objeto.apellido}</li>
                <li>{props.arreglo.map(props.funcion)}</li>
                <li>{props.elemetoDeReact}</li>
            </ul>
        </div>
    );

}

PorpiedadesUno.defaultProps = {
    porDefecto: "Pripiedades data por defecto"
}