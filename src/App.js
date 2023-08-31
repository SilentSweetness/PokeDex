import "./index.css";
import Header from './components/Header';
import Footer from './components/Footer';
import questions from "./components/questions";
import QuizContainer from "./components/QuizContainer";

//import abra from './abra.json'
//import togepi from './togepi.json'

function App () {
  return (
    <div className="app">
        <Header />
        <QuizContainer data={questions} />
        <Footer />
    </div>
);
}

export default App;