import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About_Us from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Clicker from "./pages/Clicker";

export default function Router() {
    return (
        <>
            <Routes>
                <Route path='/' Component={Home}>
                    <Route path='/about-us' Component={About_Us}/>
                    <Route path='/contact' Component={Contact}/>
                    <Route path='/clicker' Component={Clicker}/>
                </Route>
            </Routes>
        </>)
}