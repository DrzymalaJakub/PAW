import  Container from "./../../components/Container"
import React from "react";
export default function Clicker() {
  const [count, setCount] = React.useState<number>(0)

  return <Container>
    <>
      <h1>Poklikaj mnie</h1>

      <p content={`Kliknięto ${count} raz(y)`} />
      <button
          onClick={()=>{
            setCount(count + 1)
          }}>
        Kliknij mnie</button>
    </>
  </Container>
}