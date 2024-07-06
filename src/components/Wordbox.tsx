import React from 'react'
import "./Wordbox.css"

interface Props {
    wordToGuess: string;
    guessedLetters: string[];
    isLoser : boolean;
}

const Wordbox = ({wordToGuess,guessedLetters,isLoser}:Props) => {
  return (
    <div className='wordbox'>
        {wordToGuess.split("").map((letter,index)=>(
            <span className='wordbox-underline'>
                <span 
                    className='wordbox-text'
                    key={index}
                    style={{visibility:(isLoser || guessedLetters.includes(letter)? "visible" : 'hidden'),
                            color : !guessedLetters.includes(letter) && isLoser ? "red" : "white"
                    }}
                    >
                        {letter}
                </span>
            </span>
        ))}
    </div>
  )
}

export default Wordbox