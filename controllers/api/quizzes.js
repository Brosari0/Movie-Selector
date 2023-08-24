const Quiz = require('../../models/quiz');

module.exports = {
  saveAnswers
}

async function saveAnswers(req, res) {
  // try {
  //   const { answers } = req.body;
  
  //   if (!answers) {
  //     return res.status(400).json({error: 'Answers are required' });
  //   }
  
  //   const newQuiz = new Quiz({ answers });
  
  //   await newQuiz.save()
  //     res.json({message: 'Answers saved successfully.' });
  // } catch(error) {
  //     res.status(500).json({ error: 'An error occurred while saving answers.' });
  // }
  console.log('it worked!');
}