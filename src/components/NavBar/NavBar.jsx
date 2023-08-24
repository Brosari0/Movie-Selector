import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className='navBar'>
      <span>Welcome, {user.name}</span>
      <ul className='navList'>
        <li>
          <Link to="/orders/new">Quiz Page</Link>
        </li>
        <li>
          <Link to="/orders">Result Page</Link>
        </li>
        <li className='logout'><Link to="" onClick={handleLogOut}>Log Out</Link></li>
      </ul>
    </nav>
  );
}