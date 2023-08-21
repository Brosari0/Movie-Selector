import { useState } from "react";

export default function Quiz(quizNum) {
  let [formData, setFormData] = useState({
    date: '',
    genre: '',
    actor: '',
    director: '',
    rating: ''
  })

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked Submit', quizNum);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>{"Year"}</label>
        <input name="date" type="number" min="1900" max="2023" step="1" onChange={handleChange} />
        {quizNum === 10 ? <button type="Submit">Submit</button> : ""}
      </form>
    </div>
  )
}