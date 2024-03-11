import {Route, Routes} from "react-router-dom";
import Home from "./Pages/About";
import About from "./Pages/Home";
import Contact from "./Pages/Contact";
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