import { useState } from "react";
import Quiz from "../../components/Quiz/Quiz";

export default function QuizPage() {
  let [quizNum, setQuizNum] = useState(1);

  return (
    <>
    <h1>Quiz Page</h1>
    <Quiz quizNum={quizNum} />
    <button onClick={()=> setQuizNum(quizNum--)}>Back</button>
    <button onClick={()=> setQuizNum(quizNum++)}>Next</button>
    </>
  );
}