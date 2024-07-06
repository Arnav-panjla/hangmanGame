import React from 'react'
import "./Hangman.css";

const HEAD =  (<div className="head" />)
const BODY =  (<div className="body" />)
const ARM_L = (<div className="arm-l" />)
const ARM_R=  (<div className="arm-r" />)
const LEG_L = (<div className="leg-l" />)
const LEG_R = (<div className="leg-r" />)

const BODY_PARTS = [HEAD,BODY,ARM_L,ARM_R,LEG_L,LEG_R]

interface Props {
  incorrectLetters : string[];
}

const Hangma = ({incorrectLetters}:Props) => {
  return (
    <div className='hangman-container'>
      <div className='frame-toprod' />
      <div className='frame-noose' />
      <div className="frame-pole" />
      <div className="frame-base" />
      {incorrectLetters.map((letter,index)=>(
        BODY_PARTS[index]
      ))}
    </div>
  )
}

export default Hangma