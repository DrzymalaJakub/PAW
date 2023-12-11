import React from "react";

interface ParagraphProps{
    content: string
}

function Paragraph(props : ParagraphProps): React.JSX.Element{ //props can be changed to {content} like in mjs
    return (
        <>
            {props.content}
        </>
    )
}

export default Paragraph