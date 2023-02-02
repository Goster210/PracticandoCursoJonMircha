import React, {Component,useState, useEffect} from "react";


function Reloj ({hour}){
    return <h3>{hour}</h3>
}




export default function RelojHooks (){

    const [hour,setHour] = useState(new Date().toLocaleTimeString());
    const [visible,setVisible] = useState(false)

    //no tiene sentidos si no hay variables que controlar

    useEffect(() =>{

        let temporizador;    
        
        if(visible){
            temporizador = setInterval(() => {
                setHour(new Date().toLocaleTimeString())
        }, 1000);
        }else{
            clearInterval(temporizador);
        }

        return () => {
            console.log('Fase de desmonjate')
            clearInterval(temporizador);
        }
        
    },[visible]);




    const iniciar = () =>{
        setVisible(true)
    }

    const detener = () =>{
        setVisible(false)
    }


    
        return(
            <div>
                <h1>Reloj con HOOKS</h1>

                {visible && <Reloj hour ={hour}/>}
                <button onClick={(e) => iniciar()}>Inicial</button>
                <button onClick={detener}>Detener</button>
              
            </div>
        )
    

} 