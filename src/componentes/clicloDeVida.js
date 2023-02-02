import React, {Component} from "react";



class Reloj extends Component{
    constructor(props){
        super(props)
         }

         //se ejecuta cuando el componente no exista
    componentWillUnmount(){
        console.log(3,"El componente ha sido eliminado del DOM");
    }

    render(){
       
        return (<h3>{this.props.hora}</h3>)
        
        
    }
}




export default class cicloDeVida extends Component{
 
    constructor(props){
        super(props)
        console.log(0,"El componente se inicializa, aun no esta en el DOM");
        this.state={
            hora: new Date().toLocaleTimeString(),
            visible: false
        }
        this.temporizador = null; 
    
    }
//DOM -> ARBOL HTML
    componentDidMount(){
        console.log(1,"El componente ya se encuentra en el DOM");
    }

    componentDidUpdate(prevProps, prevState){
        console.log(2,"El estado o las props del componente han cambiado portal hay que redibujar DOM");
        console.log(prevProps);
        console.log(prevState);
    }

    

    ticktack = () =>{
        this.temporizador = setInterval(() => {
            this.setState({
                hora: new Date().toLocaleTimeString()
            })
        }, 1000);
    }

    iniciar = () =>{
        this.ticktack();
        this.setState({
            visible: true 
        })
        
    }
    detener = () =>{
        clearInterval(this.temporizador);
        this.setState({
            visible: false 
        })
    }

    render(){
        console.log(4,"El componente se dibuja o se redibuja por los cambios en el DOM");
        return(
            <div>
                <h1>CICLO DE VIDA DE LOS COMPONETES</h1>
                
                {this.state.visible && <Reloj hora ={this.state.hora}/>}

                <button onClick={(e) => this.iniciar()}>Inicial</button>
                <button onClick={this.detener}>Detener</button>
            </div>
        )
    }



}