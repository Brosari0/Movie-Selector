import sendRequest from "./send-request";

const BASE_URL = '/api/quizzes';

export async function saveAnswers(payload) {
  return sendRequest(`${BASE_URL}/saveAnswers`, 'POST', payload);
}