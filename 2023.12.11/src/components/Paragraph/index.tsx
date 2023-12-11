import React from "react";

interface ParagraphProps{
    content: string
}

function Paragraph({content} : ParagraphProps): React.JSX.Element{
    return (
        <>
            {content}
        </>
    )
}

export default Paragraph