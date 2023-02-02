import React, {Component} from "react";

function Login (){
    return(
        <div>
            <h3>login</h3>
        </div>
    )
}

function Logout (){
    return(
        <div>
            <h3>logout</h3>
        </div>
    )
}



export default class RenderizadoCondicional extends Component{
//repinta la interfaz cuando un compomnete se actualiza
//un ejemplo es el inicio y el cierre de sesion (un boton que me permita eso)

constructor(props){
    super(props);
    this.state={
        session: true
    }
}
    render(){
        return(
            <div>
                <h2>Renderizado Condicional</h2>
                {this.state.session ? <Login/> : <Logout/>}
                
                
            </div>
        )
    }
}