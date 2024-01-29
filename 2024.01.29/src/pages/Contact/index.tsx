import  Container from "./../../components/Container"
import "./contact.scss"
import React from "react";
export default function Contact() {
  const [text, setText] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [temat, setTemat] = React.useState('');
  const [tresc, setTresc] = React.useState('');
  const [submitted] = React.useState(0)

  if(!submitted){
    return <Container>
      <>
        <h1>Skontaktuj się z nami</h1>
        <form onSubmit={() => {
          console.log(text)
          console.log(email)
          console.log(temat)
          console.log(tresc)
        }}>

          <input type="text" placeholder="Imię" onChange={(e)=>{setText(e.target.value)}}/>
          <input type="email" placeholder="E-mail" onChange={(e)=>{setEmail(e.target.value)}}/>
          <input type="text" placeholder="Temat" onChange={(e)=>{setTemat(e.target.value)}}/>
          <textarea placeholder="Treść wiadomości" onChange={(e)=>{setTresc(e.target.value)}}/>
          <button value="Wyślij wiadomość"/>
        </form>
      </>
    </Container>;
  }
  else {
    return
    <Container><>Dziękujemy
      za wysłanie wiadomości
    </>
    </Container>
  }

}