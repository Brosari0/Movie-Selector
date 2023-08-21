import { useState } from "react";

export default function Quiz() {
  const [quizNum, setQuizNum] = useState(0);
  const [formData, setFormData] = useState({});

  const questions = [
    'What your favorite genre?',
    'Who is your favorite actor?',
    "Do you want a series or a movie?",
    "Animated or not?",
    "Anything else you'd like?",
    // Add more questions here
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