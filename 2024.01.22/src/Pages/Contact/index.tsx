import Navbar from "../../Components/Navbar";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import React from "react";

export default function Contact(){
    const [email, setEmail] = React.useState('');
    const [topic, setTopic] = React.useState('');
    const [agreement, setAgreement] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [isSend, setIsSend] = React.useState(false);



    return <>
        <Header pageName={"Contact"}/>

        <form>
            <label>Email </label><input type="email" placeholder="Email" onChange={(e)=>{
                if(email.length < 20){
                    e.target.style.backgroundColor = "#FF0000";
                }
                else{
                    e.target.style.backgroundColor = "#FFFFFF";
                }
            }}/><br/>
            <label>Topic </label><select onChange={(e)=>{setTopic(e.target.value)}}>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
                <option>E</option>
            </select><br/>
            <label>I agree to process my personal data </label><input type="checkbox" onClick={()=>{setAgreement(!agreement)}}/><br/>
            <textarea placeholder="message" onChange={(e)=>{setMessage(e.target.value)}}/><br/>
            <input type="submit" value="Send" onSubmit={()=>{

            }}/>
        </form>

        <Navbar/>
        <Footer/>
    </>
}