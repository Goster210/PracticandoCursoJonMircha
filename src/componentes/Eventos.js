import React, {Component} from "react";



//Eventos ecmascript 6
export class EventosES6 extends Component{

    constructor(props){
        super(props)

        this.state = {
            contador: 0
        }
        this.sumar = this.sumar.bind(this)
        this.restar = this.restar.bind(this)
    }
    

    sumar(e){
        console.log("Estoy sumando")
        this.setState({contador: this.state.contador+1})

    }

    restar(e){
        console.log("Estoy restando")
        this.setState({contador: this.state.contador-1})
        
    }
    

    render (){

        return(
            <div>
            <h1>EventosES6 componentes de clase </h1>
            <h3>{this.state.contador}</h3>
            
            <div>
                <button onClick={this.sumar}>+</button>
                <button onClick={this.restar}>-</button>
            </div>
            </div>
            
        )
    }
}

//Eventos ecmascript 7
//propirties inizailizer
//Desaparece el constructor

export class EventosES7 extends Component{

   
        state = {
            contador: 0
        }

        
    //para evitar el bindeo utilizo las arrow functions   NO BIND
    sumar = () =>{
        console.log("Estoy sumando")
        this.setState({contador: this.state.contador+1})

    }

    restar = () =>{
        console.log("Estoy restando")
        this.setState({contador: this.state.contador-1})
        
    }
    

    render (){

        return(
            <div>
            <h1>EventosES7 componentes de clase </h1>
            <h3>{this.state.contador}</h3>
            
            <div>
                <button onClick={this.sumar}>+</button>
                <button onClick={this.restar}>-</button>
            </div>
            </div>
            
        )
    }
}
//compnente 1 para el mensaje
function Mensaje (props){
    return(
        <div>
            <h3>
                {props.mensaje}
            </h3>
        </div>
    )
}
//compnente 2 para el boton creado como componente

//opciones
function Boton (props){
    return(
    <button onClick={props.myOnClick}>Boton pero en componente</button>
    )
}
//con arrow function
const Boton2 = (props) =>(
    <button onClick={props.myOnClick}>Boton pero en componente</button>
        )

export class EventosClase11 extends Component{
    
    state = {
        estado: false
    }

    activarSaludo = () =>{

        this.setState({estado: true})

    }
    desactivarSaludo = () =>{

        this.setState({estado: false})

    }


    
    handleClick(e, mensaje ){
        console.log(e)

        //formas para manejar ev entos ya sea por react o por la parte nativa de javascript

        //pinter event
        console.log(e.nativeEvent)
        //target es el componente
        console.log(e.target)

        console.log(e.nativeEvent.target)
        console.log(mensaje)

        this.activarSaludo()

        
       
    }
    handleClick2(e, mensaje ){
          this.desactivarSaludo()
       
    }

    

    render(){
        return(
            <div>
                <h1>EVENTOS DE CLASE 11</h1> 
                <button onClick={(e) => 
                    this.handleClick(e,"Hola como estas este parametro es de un evento")}>Saludar</button>
                    {this.state.estado ? <Mensaje mensaje="Hola como estas este parametro es de un evento"/>:<Mensaje mensaje=""/>}
           
          {/*Evento con un componente personalizado*/}
           <Boton2 myOnClick={(e) => 
                    this.handleClick2(e)}/>
            </div>
        )
    }
}