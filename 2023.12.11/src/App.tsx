import React from 'react';
import './App.scss';
import Navbar from "./components/Navbar";
import Paragraph from "./components/Paragraph";
import Clicker from "./components/Clicker";

function App() {
  return (
    <>
        <Navbar />

        <Paragraph content={"Hello World!"} />

        <Clicker></Clicker>
    </>
  );
}

export default App;
