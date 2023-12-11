import React from "react";
import Paragraph from "../Paragraph";

function Clicker():React.JSX.Element{
    const [count, setCount] = React.useState<number>(0) //create 'class'

    return (
        <>
            <Paragraph content={`You've clicked ze button ${count} times`} />
            <button
                onClick={()=>{
                    setCount(count + 1)
                }}>
                Click Me!</button>
        </>
    )
}
export default Clicker