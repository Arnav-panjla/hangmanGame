import React from 'react';
import letters from "../lettersList.json";
import "./Keyboard.css";

interface Props {
  inactiveLetters : string[];
  activeLetters : string[];
  addGuessedLetter : (letter:string)=>void;
  isWinner : boolean;
  isLoser : boolean;
}
const Keyboard = ({inactiveLetters,activeLetters,addGuessedLetter,isWinner,isLoser}:Props) => {
  return (
    <div className='keyboard-container'>
      { letters.map((letter)=> {
        const isActive = activeLetters.includes(letter)
        const isInactive = inactiveLetters.includes(letter)
        return (
        <button 
        className={`keyboard-button${isActive ? '-active' : ''}${isInactive ? '-inactive' : ''}`}
          key={letter}
          onClick = {()=> addGuessedLetter(letter)}
          disabled = {isWinner || isLoser}
          >
          {letter.toUpperCase()}
        </button>
        )
      })}
    </div>
  )
}

export default Keyboard