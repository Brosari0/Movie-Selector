import { checkToken } from "../../utilities/users-service"

export default function ResultPage() {
  async function handleCheckToken() {
    const expDate = await checkToken();
  }

  return (
    <>
    <h1>Result Page</h1>
    <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}