import sendRequest from "./send-request";

const BASE_URL = '/api/quizzes';

export async function saveAnswers(answers) {
  return sendRequest(BASE_URL, 'POST', answers);
}