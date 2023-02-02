import React,{useState} from "react";



export default function ContadorHooks (){
    

    const [contador,setContador]= useState(0);

    const sumar = () => setContador(contador+1)
    const restar = () => setContador(contador-1)

    

    return(
        <div>
            <h1>HOOKS - useState</h1>
            <nav>
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar
            </button>
            <h3>{contador}</h3>
            </nav>
        </div>
    )
}

