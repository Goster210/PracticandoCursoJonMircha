import React from "react";
import logo from './logo.svg';
import './App.css';
import ComponenteUno  from "./componentes/ComponenteUno";
import ComponenteDos from "./componentes/ComponenteDos";
import ComponenteFuncional from "./componentes/ComponenteFuncional";
import PropiedadesUno from "./componentes/PropiedadesUno";
import RenderizadoCondicional from "./componentes/RenderizadoCondicional";
import RenderizadoElementos from "./componentes/RenderizadoElementos";
import {EventosES6, EventosES7, EventosClase11} from "./componentes/Eventos";
import ComunicacionEntreCompnetes from "./componentes/ComunicacionEntreCompnetes"
import CicloDeVida from "./componentes/clicloDeVida";
import AjaxApis from "./componentes/AjaxApis";
import ContadorHooks from "./componentes/ContadorHooks";
import ScrollHooks from "./componentes/ScrollHooks";
import RelojHooks from "./componentes/RelojHooks";
import AjaxHooks from "./componentes/AjaxHooks";
import HooksPersonalizados from "./componentes/HooksPersonalizados";
import Refercias from "./componentes/Referencias";
 

function App() {
  return (
    
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hola rey 
        </a>
        <section>
      <Refercias/>
      <br/>
      </section>
        <section>
      <AjaxApis/>
      </section>
       
      <section>
      <ComponenteUno/>
      </section>
      <section>
      <ComponenteDos msg="Hola soy el componente Dos"/>
      </section>
      <section>
      <ComponenteFuncional msg="Hola soy el componente Funcional"/>
      </section>
      <section>
      <PropiedadesUno cadena="Hola soy una cadena" 
      numero ={19} 
      booleano ={true}
      arreglo = {[1,2,3]}
      objeto = {{nombre:"Juan", apellido:"Rincon"}}
      funcion = {(numero) => numero+numero}
      elemetoDeReact = {<i>Soy un elemento de react</i>}
      />
      </section>
 
      <section>
      <RenderizadoCondicional/>
      </section>
      <section>
      <RenderizadoElementos/>
      </section>
      <section>
      <EventosES6/>
      </section>
      <section>
      <EventosES7/>
      </section>
      <section>
      <EventosClase11/>
      </section>
      <section>
      <ComunicacionEntreCompnetes/>
      </section>
      <section>
      <CicloDeVida/>
      </section>
      <section>
      <ContadorHooks/>
      </section>
      <section>
      <ScrollHooks/>
      </section>
      <section>
      <RelojHooks/>
      </section>
      <section>
      <AjaxHooks/>
      </section>
      <section>
      <HooksPersonalizados/>
      </section>
    
      </header>

      
    </div>
  );
}

export default App;
