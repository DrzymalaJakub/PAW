import {JSX} from "react/jsx-runtime";

export default function Heading(props: { level: number ;  content: string}) {
    if(props.level < 1 || props.level > 6 || props.level == null){ props.level = 2;}
    const Tag = `h${props.level}` as keyof JSX.IntrinsicElements

  return (
    <Tag>
    {props.content}
    </Tag>
  )
}