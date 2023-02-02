import React,{ createRef,useRef } from 'react'


export default function Refercias(){
    //para el boton
    let refMenu = useRef(),
    //para el nav
    refMenuBtn = useRef()


    const handleToggleMuenu = (e) =>{
        console.log("Hola juan",refMenu,refMenuBtn)

        /* SIN EL HOOK DE REFERENCIA
        const $menu = document.getElementById("menu")

        if (e.target.textContent === "menu") {
            e.target.textContent = "Cerrar";
            $menu.style.display = "block"
            
        } else {
            e.target.textContent = "menu";
            $menu.style.display = "none"
        }
        

         /* CON EL HOOK DE REFERENCIA*/

         if (refMenuBtn.current.textContent === "menu") {
            refMenuBtn.current.textContent = "Cerrar";
            refMenu.current.style.display = "block"
            
        } else {
            refMenuBtn.current.textContent = "menu";
            refMenu.current.style.display = "none"
        }



    }



    return(
        <div>
            <h2>REFERENCIAS</h2>
            <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMuenu}>menu</button>
            <nav id = "menu" ref={refMenu} style={{display:"none"}}>
                <a href='#'>Seccion 1</a>
                <a href='#'>Seccion 2</a>
                <a href='#'>Seccion 3</a>
                <a href='#'>Seccion 4</a>
                <a href='#'>Seccion 5</a>
            </nav>
        </div>
    )
}
