import React, { useState } from 'react'
import MainMenu from './components/MainMenu'
import Quiz from './components/Quiz'
import Scores from './components/Scores'
import {QuizContext} from './Helpers/QuizContext'
import './App.css'

const App = () => {

  const [gameState, setGameState] = useState('menu')
  const [scores, setScores] = useState(0)

  return (

    <div className='App'>
      <h1>Quiz App</h1>
      <QuizContext.Provider value = {{gameState, setGameState, scores, setScores}}>
        {gameState === 'menu' && <MainMenu/>}
        {gameState === 'quiz' && <Quiz/>}
        {gameState === 'scores' && <Scores/>}
      </QuizContext.Provider>
    </div>
  )
}

export default App
