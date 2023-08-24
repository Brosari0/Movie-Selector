const express = require('express');
const router = express.Router();
const quizzesCtrl = require('../../controllers/api/quizzes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/quizzes'

// POST (saves user answers)
router.post('/saveAnswers', ensureLoggedIn, quizzesCtrl.saveAnswers);

module.exports = router;