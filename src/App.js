import axios from 'axios';
import { useState, useEffect } from "react";
import styled from 'styled-components';
import togepi from './togepi.json'
import "./index.css";

//test
const questions = [
  {
    id: 175,
    question: "Name and type?",
    answer: "Togepi is a fairy type"
  },
  /* test, use for later
  {
    id: 32,
    question: "Name and type?",
    answer: "Abra is a psychic type"    
  }
  */
]

function App() {
  const [pokemon, setPokemon] = useState({});
  const [isInitialized, setIsInitialized] = useState();
  const [pokemonSprite, setPokemonSprite] = useState();
  const [pokemonName, setPokemonName] = useState();
  const [selectedId, setSelectedId] = useState(null);

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
    <div className="body">
     <h1>PokeDex Quiz</h1>
     {pokemonSprite && isInitialized && (
      <img src={pokemonSprite} alt={`front default ${pokemon.name}`} className="sprite" />
     )}
     <div className="flashcards">
    {questions.map((question) => (
    <div key={question.id} onClick={() => handleClick(question.id)}
    className={question.id === selectedId ? "selected" : ""}>
      <p>{question.id === selectedId ? question.answer : question.question}</p>
      </div>
      ))}
  </div>
  <footer>My first collaborated react app.</footer>
    </div>
  );
}


export default App;

