const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  answers: [String]
});

module.exports = mongoose.model('Quiz', quizSchema);