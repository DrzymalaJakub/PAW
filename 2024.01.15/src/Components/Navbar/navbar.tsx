import {Link} from "react-router-dom";

export default function Navbar(){
    return(
        <div id="app-nav">
            <div className="navbar-brand">
                App name
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}