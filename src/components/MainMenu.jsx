import {useContext} from 'react'
import {QuizContext} from '../Helpers/QuizContext'

const MainMenu = () => {

    const { setGameState} = useContext(QuizContext)

  return (

    <div className='mainMenu'>
      <button onClick={() => {setGameState("quiz")}}>Start the quiz</button>
    </div>
  )
}

export default MainMenu
