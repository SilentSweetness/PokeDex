import axios from 'axios';
import { useState, useEffect } from "react";
import styled from 'styled-components';
import togepi from './togepi.json'

const Img = styled.img
` height: 200px;
  border: 2px solid #000000;
  margin: 20px;
  `

//test
const questions = [
  {
    id: 175,
    question: "Name?",
    answer: "Togepi",
    ask: "Type?",
    type: "Fairy"
  }]

function App() {
  const [pokemon, setPokemon] = useState({});
  const [isInitialized, setIsInitialized] = useState();
  const [pokemonSprite, setPokemonSprite] = useState();
  const [pokemonName, setPokemonName] = useState();
  const [selectedNameId, setSelectedNameId] = useState(null);
  const [selectedTypeId, setSelectedTypeId] = useState(null);

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

  const handleNameClick = (id) => {
    setSelectedNameId(id !== selectedNameId ? id : null)
  }

  const handleTypeClick = (id) => {
    setSelectedTypeId(id !== selectedTypeId ? id : null)
  }

  return (
    <div>
     <h1>PokeDex</h1>
     {pokemonSprite && isInitialized && (
      <Img src={pokemonSprite} alt={`front default ${pokemon.name}`} />
     )}
     <div className="flashcards">
    {questions.map((question) => (
    <div key={question.id} onClick={() => handleNameClick(question.id)}
    className={question.id === selectedNameId ? "selected" : ""}>
      <p>{question.id === selectedNameId ? question.answer : question.question}</p>
      </div>
      ))}
  </div>
  <div className="flashcards">
    {questions.map((ask) => (
    <div key={ask.id} onClick={() => handleTypeClick(ask.id)}
    className={ask.id === selectedTypeId ? "selected" : ""}>
      <p>{ask.id === selectedTypeId ? ask.type : ask.ask}</p>
      </div>
      ))}
  </div>
    </div>
  );
}


export default App;

