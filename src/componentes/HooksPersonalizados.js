import React from "react";
import { useFetch } from "../Hooks/useFetch";

export default function HooksPersonalizados() {
  let url = "https://pokeapi.co/api/v2/pokemon/";


  return (
    <div>
      <h2>HOOKS PERSONALIZADOS</h2>
      <h3>
        <pre style={{whiteSpace:"pre-wrap"}}>
          <code>{JSON.stringify(useFetch(url).data)}</code>
        </pre>
      </h3>
      <h3>{JSON.stringify(useFetch(url).isPending)}</h3>
      <h3>
        <mark>{JSON.stringify(useFetch(url).error)}</mark>
      </h3>
    </div>
  );
}
