import React, { useState, useEffect } from "react";

function Pokemon({ nombre, avatar }) {
  return (
    <figure>
      <img src={avatar} alt={nombre} />
      <figcaption>{nombre}</figcaption>
    </figure>
  );
}

export default function AjaxHooks() {
  const [pokemons, setPokemons] = useState([]);
  /* 
  useEffect(() => {

    let url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        //console.log(json);
        json.results.forEach((element) => {
          fetch(element.url)
            .then((res) => res.json())
            .then((json) => {

              let pokemon = {
                id: json.id,
                name: json.name, 
                avatar: json.sprites.front_default,
              };
              setPokemons((pokemons) => [...pokemons, pokemon]);
            });
        });
      });
  }, []);
*/

  useEffect(() => {
    const getPokemons = async (url) => {
      let res = await fetch(url),
      json = await res.json();

      json.results.forEach(async (el) => {
        let res = await fetch(el.url),
        json = await res.json();
      

      let pokemon = {
        id: json.id,
        name: json.name,
        avatar: json.sprites.front_default,
      };
      setPokemons((pokemons) => [...pokemons, pokemon]);
    });
    };

    getPokemons("https://pokeapi.co/api/v2/pokemon/");
  }, []);
  return (
    <div>
      <h1>PETICIONES ASINCORAS POR HOOKS AJAX Y APIS</h1>

      {pokemons.length === 0 ? (
        <h3>Cargando ...</h3>
      ) : (
        pokemons.map((el) => (
          <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
        ))
      )}
    </div>
  );
}
