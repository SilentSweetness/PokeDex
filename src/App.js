import axios from 'axios';
import { useState, useEffect } from "react";
import styled from 'styled-components';

function App() {
  const [pokemon, setPokemon] = useState();
  const [isInitialized, setIsInitialized] = useState();
  const [pokemonSprite, setPokemonSprite] = useState();

  const Img = styled.img`
  height: 50px,
  `

  const getPokemon = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/togepi');
      console.log(response);
      // For whatever reason the response.json() doesn't work anymore. So I've changed it to use response.data
      const data = await response.data;
      console.log(data);
      
      setPokemon(data);

      console.log(data.sprites.front_default)
      setPokemonSprite(data.sprites.front_default)

    } catch (error) {
      console.log(error);
    }
  };


  // I managed to get this working for you <3
  // You did everything right, and your code works
  // "useEffect" just needed to be added to the import. That's why it was undefined.
  useEffect(() => {
    if (!isInitialized) {
      getPokemon();

      setIsInitialized(true);
    }
  }, [pokemon, isInitialized])

  return (
    <div>
     <h1>PokeDex</h1>
     {pokemonSprite && isInitialized && (
      <Img src={pokemonSprite} alt="front default togepi" />
     )}
    </div>
  );
}


export default App;
