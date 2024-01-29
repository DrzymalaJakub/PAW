import './navbar.scss'
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <div id="app-nav">
      <div className="navbar-brand">
        App name
      </div>
      <nav>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to='/' className="nav-link">Home</Link>
            <Link to='/about-us' className="nav-link">About-us</Link>
            <Link to='/contact' className="nav-link">Contact</Link>
            <Link to='/clicker' className="nav-link">Clicker</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}