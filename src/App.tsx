import React, { useCallback, useEffect, useState } from 'react';
import './App.css';

import words from "./wordList.json"
import Hangman from './components/Hangman';
import Wordbox from './components/Wordbox';
import Keyboard from './components/Keyboard';

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {

  const [wordToGuess, setWordToGuess] = useState(getWord)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  
  const incorrectLetters = guessedLetters.filter(
    (letter)=> !wordToGuess.includes(letter)
  )

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isWinner || isLoser) return

      setGuessedLetters(currentLetters => [...currentLetters, letter])
    },[guessedLetters,isLoser,isWinner]) 

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return
      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  },[guessedLetters])
  

  return ( 
    <div className = 'App'>
      <span className='heading'>Hangman</span>
      <span className="result-text">
        {
        `${isWinner ? "Congrats ! You win. 🥳" : ""}
        ${isLoser ? "You Lost! 👹 👹 👹 " : ""}`
        }
      </span>
      <Hangman incorrectLetters = {incorrectLetters}/>
      <Wordbox 
      isLoser = {isLoser}
      guessedLetters={guessedLetters}
       wordToGuess={wordToGuess}
      />
      <Keyboard 
      activeLetters={guessedLetters.filter((letter)=>wordToGuess.includes(letter))}
      inactiveLetters={incorrectLetters}
      addGuessedLetter={addGuessedLetter}
      isWinner = {isWinner}
      isLoser = {isLoser}
      />
    </div>
  );
}

export default App;
