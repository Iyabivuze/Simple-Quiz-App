import { useContext } from "react"
import { QuizContext } from "../Helpers/QuizContext"
import { questions } from "../Helpers/questionBank"

const Scores = () => {

    const {scores,setScores, setGameState} = useContext(QuizContext)
    const gobackHome = () => {
        setScores(0)
        setGameState("menu")
    }
  return (

    <div className="scores">
      <h1> You scored {scores}/{questions.length} Questions</h1>
      <button onClick={gobackHome}>Home</button>
    </div>
  )
}

export default Scores
