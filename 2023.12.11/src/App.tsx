import React from 'react';
import './App.scss';
import Navbar from "./components/Navbar";
import Paragraph from "./components/Paragraph";

function App() {
  return (
    <>
        <Navbar />

        <Paragraph content={"Hello World!"} />
    </>
  );
}

export default App;
