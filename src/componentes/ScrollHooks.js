
import React, {useState, useEffect} from "react";


export default function ScrollHooks (){

    const [scrollY,setScrollY] = useState(0)

    
    useEffect(() => {
        console.log("Fase de actualizacion")
        const detectarScroll = () => {setScrollY(window.pageYOffset)};
        



        return () => { window.removeEventListener("scroll",detectarScroll)}
    },[scrollY]);
//cada vez que se remderzia se ejecuta el useeffect
    useEffect(() => {
        console.log("Fase de actualizacion")
    });
//solo  se ejecuta el useeffect una vez
    useEffect(() => {
        console.log("Fase de montaje")
    },[]);
//fase de desmontaje
    useEffect(() => {
        
        return ()=>{
            console.log("Fase de montaje")
        };
    });

    return(
        <div>
            <h1>SCROLL HOOKS - useEffect</h1>
            <p>la porsicion del scroll en el navegador es de: {scrollY} px</p>
        </div>
    )

}