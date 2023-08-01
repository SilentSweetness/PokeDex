import axios from 'axios';
import { useState, useEffect } from "react";
import styled from 'styled-components';
import togepi from './togepi.json'

const Img = styled.img
` height: 200px;
  border: 2px solid #000000;
  margin: 20px;
  `

function App() {
  const [pokemon, setPokemon] = useState({});
  const [isInitialized, setIsInitialized] = useState();
  const [pokemonSprite, setPokemonSprite] = useState();
  const [pokemonName, setPokemonName] = useState();
  const [selectedId, setSelectedId] = useState(null);
  const [pokemonType, setPokemonType] = useState();

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
      setPokemonName(data.name)

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!isInitialized) {
      // getPokemon();
      setPokemon(togepi)
      setPokemonSprite(togepi.sprites.front_default)
      setSelectedId(togepi.id)
      setPokemonType(togepi.types.name)

      setIsInitialized(true);
    }
  }, [pokemon, isInitialized])

  if (isInitialized && !pokemon) {
    return null;
  }

  const handleClick = (id) => {
    setSelectedId(id !== selectedId ? id : null)
  }

  return (
    <div>
     <h1>PokeDex</h1>
     {pokemonSprite && isInitialized && (
      <Img src={pokemonSprite} alt={`front default ${pokemon.name}`} />
     )}
     <h2>{pokemon.name} {pokemon.id} {pokemon.types}</h2>
     
    </div>
  );
}


export default App;


/*
{questions.map((question) => (
    <div key={question.id} onClick={() => handleClick(question.id)}
    className={question.id === selectedId ? "selected" : ""}>
      <p>{question.id === selectedId ? question.answer : question.question}</p>
      </div>
      ))}
      */