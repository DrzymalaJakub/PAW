import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Router from "./routes.tsx"
import { BrowserRouter } from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
        <Navbar></Navbar>

        <Router/>

        <Footer></Footer>
    </BrowserRouter>
  )
}
