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
    console.log('You clicked Submit');

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Year</label>
        <input name="date" type="number" min="1900" max="2023" step="1" onChange={handleChange} />
        <label>Genre</label>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}