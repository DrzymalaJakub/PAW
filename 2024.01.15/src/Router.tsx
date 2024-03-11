import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/home";
import About from "./Pages/About/about";
import Contact from "./Pages/Contact/contact"
export default function Router() {
    return (
    <>
        <Routes>
                <Route path='/' Component={Home}/>
                <Route path='/about' Component={About}/>
                <Route path='/contact' Component={Contact}/>
        </Routes>
    </>)
}