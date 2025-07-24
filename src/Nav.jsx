
import { Browserrouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css'
import Home from './Home' ;
import About from './About';
import Contact from './Contact';
function Nav() {
    return (
        <Router> 
            <nav>
                <Link to="#">Home</Link>
                <Link to="#">About</Link>
                <Link to="#">Contact</Link>
            </nav>
            <Routes>
                <Route path="#" element={<Home />} />
                <Route path="# " Element={<About />} />
                <Route patyh="# " Element={<Contact />} />
            </Routes>
        </Router>


    );
}


export default Nav;