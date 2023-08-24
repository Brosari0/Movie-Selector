import { useState } from "react";
import * as quizzesAPI from "../../utilities/quizzes-api";

export default function Quiz() {
  const [quizNum, setQuizNum] = useState(0);
  const [formData, setFormData] = useState({});

  const questions = [
    "What type of movie genre are you in the mood for today?",
    "Are you looking for something light-hearted or something more serious?",
    "Do you prefer movies set in the past, present, or future?",
    "Are you interested in a movie with a strong plot twist?",
    "Do you enjoy movies with complex character development?",
    "Are you in the mood for action-packed scenes or emotional drama?",
    "Do you want a good laugh or do you prefer a suspenseful thriller?",
    "Would you like a movie that takes place in a specific location or environment?",
    "Are you a fan of movies directed by a specific director or starring a certain actor/actress?",
    "Are you interested in movies with unique cinematography or visual effects?",
    "Do you want a movie that's highly recommended by the audience?",
    "Are you open to movies based on books or novels?",
    "Do you prefer original concepts or classic storylines?",
    "Would you like a movie that features musical elements or not?",
    "Are you interested in animated movies or live-action films?",
    "Are you open to watching movies in languages other than your native language?",
    "Are you looking for a short movie or a longer cinematic experience?",
    "Do you enjoy movies that explore cultural or historical themes?",
    "Are you interested in movies with fantastical elements or those grounded in realism?",
    "Are you open to indie/art house movies or do you prefer mainstream releases?",
  ];

  const handleAnswerChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (quizNum < questions.length - 1) {
      setQuizNum(quizNum + 1);
    }
  };
  const handlePrev = () => {
    if (quizNum > 0) {
      setQuizNum(quizNum - 1);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked Submit', quizNum);
  }

  return (
    <div>
    <label>{questions[quizNum]}</label>
    <input
      type="text"
      name={`answer-${quizNum}`}
      value={formData[`answer-${quizNum}`] || ''}
      onChange={handleAnswerChange}
    />
    {quizNum > 0 ? <button onClick={handlePrev}>Prev</button> : ""}
    {quizNum < questions.length - 1 ? <button onClick={handleNext}>Next</button> : ""}
    {quizNum === questions.length - 1 ? <button type="submit" onClick={handleSubmit}>Submit</button> : ""}
    </div>
  );
}