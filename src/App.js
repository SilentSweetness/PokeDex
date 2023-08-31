import { useState } from "react";
import "./index.css";
import Header from './components/Header';
import Footer from './components/Footer';

//import abra from './abra.json'
//import togepi from './togepi.json'

const questions = [
  {
    id: 175,
    question: "Togepi",
    answer: "Togepi (175) is a fairy type"
  },
  {
    id: 63,
    question: "Abra",
    answer: "Abra (63) is a psychic type"
  }
]

function App () {
  return (
    <div className="app">
        <Header />
        <QuizContainer data={questions} />
        <Footer />
    </div>
);
}

function QuizContainer({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
  <div className='accordion'>
    {data.map((el, i)=> (
      <AccordionItem 
      curOpen={curOpen} 
      onOpen={setCurOpen} 
      title={el.question}  
      num={i} 
      key={el.title}>
      {el.answer}  
      </AccordionItem>
      ))}
  </div>
  )
}

const AccordionItem = ({num, title, curOpen, onOpen, children}) => {
  const isOpen = num === curOpen;

const handleToggle = () => {
  onOpen(isOpen ? null : num);
};

  return <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
    <p className='number'>{num < 9 ? `00${num + 1}` : num + 1}</p>
    <p className='title'>What is {title}'s type? What is the evolution line?</p>
    <p className='icon'>{isOpen ? "-" : "+"}</p>
    {isOpen && <div className='content-box'>{children}</div>}
  </div>
}

export default App;