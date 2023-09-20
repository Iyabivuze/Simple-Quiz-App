import { useContext, useState } from "react"
import { questions } from "../Helpers/questionBank"
import { QuizContext } from "../Helpers/QuizContext"


const Quiz = () => {

    const [currentQn, setCurrentQn ] = useState(0)
    const [optionChosen, setOptionChosen] = useState('')
    const { scores, setScores, setGameState} = useContext(QuizContext)

    const nextQn = () => {
        if(questions[currentQn].answer === optionChosen){
            setScores(scores + 1)
        }
        setCurrentQn(currentQn + 1)
    }

    const finishQuiz = () => {
        if(questions[currentQn].answer === optionChosen){
            setScores(scores+1)
        }
        setGameState("scores")
    }

  return (

    <div className='quiz'>
      <h1>{questions[currentQn].prompt}</h1>
      <div className="options">
        <button onClick={()=>setOptionChosen ("A")}>{questions[currentQn].A}</button>
        <button onClick={()=>setOptionChosen ("B")}>{questions[currentQn].B}</button>
        <button onClick={()=>setOptionChosen ("C")}>{questions[currentQn].C}</button>
        <button onClick={()=>setOptionChosen ("D")}>{questions[currentQn].D}</button>
      </div>

      {currentQn === questions.length-1 ? (
        <button onClick={finishQuiz}>Finish Quiz</button>
      ) : (
          
        <button onClick={nextQn}>Next Question</button>
      )}
    </div>
  )
}

export default Quiz
