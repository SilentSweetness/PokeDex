import { useState } from 'react';

function QuizContainer({ data }) {
    const [curOpen, setCurOpen] = useState(null);
  
    return (
    <div className='accordion'>
      {data.map((el)=> (
        <PokemonItem 
        curOpen={curOpen} 
        onOpen={setCurOpen} 
        title={el.question}  
        num={el.id} 
        key={el.title}>
        {el.answer}  
        </PokemonItem>
        ))}
    </div>
    )
  }
  
  const PokemonItem = ({num, title, curOpen, onOpen, children}) => {
    const isOpen = num === curOpen;
  
  const handleToggle = () => {
    onOpen(isOpen ? null : num);
  };
  
    return <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className='number'>{num}</p>
      <p className='title'>What is {title}'s type?</p>
      <p className='icon'>{isOpen ? "-" : "+"}</p>
      {isOpen && <div className='content-box'>{title} is a {children} type.</div>}
    </div>
  }
  
  export default QuizContainer;