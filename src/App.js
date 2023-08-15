import axios from 'axios';
import { useState, useEffect } from "react";
//import togepi from './togepi.json'
import "./index.css";
//import abra from './abra.json'

//test
const questions = [
  {
    id: "175",
    question: "Name and type?",
    answer: "Togepi (175) is a fairy type"
  },
  {
    id: "63",
    question: "Name and type?",
    answer: "Abra (63) is a psychic type"
  }
]

function App () {
  return (
    <div className="app">
        <Header />
        <QuizContainer />
        <Footer />
    </div>
);
}

const Header = () => {
  return (
    <h1>Pokedex</h1>
  )
}

const QuizContainer = () => {
  const [pokemonList, setPokemonList] = useState([])
  const [isInitialized, setIsInitialized] = useState();

  const getPokemon = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
      console.log(response);
      // For whatever reason the response.json() doesn't work anymore. So I've changed it to use response.data
      const data = await response.data;
      console.log(data.results);
      
      setPokemonList(data.results)

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!isInitialized) {
      getPokemon();

      setIsInitialized(true);
    }
  }, [pokemonList, isInitialized])

  if (isInitialized && !pokemonList) {
    return null;
  }
  return (
    <div>
      {pokemonList.map(pokemon => {
        return (
          <div>
            <Quiz pokemonUrl={pokemon.url} />
          </div>
        )
      })}
    </div>
  )
}



const Quiz = ({ pokemonUrl }) => {
  const [pokemon, setPokemon] = useState({});
  const [isInitialized, setIsInitialized] = useState();
  const [pokemonSprite, setPokemonSprite] = useState();
  const [pokemonName, setPokemonName] = useState();
  const [selectedId, setSelectedId] = useState(null);

  const getPokemon = async () => {
    try {
      const response = await axios.get(pokemonUrl);
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
      getPokemon();

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
    </div>
  );
}

const Footer = () => {
  return (
    <footer>My first collaborated react app.</footer>
  )
}

export default App;