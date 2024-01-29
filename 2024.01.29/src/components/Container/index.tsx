import { ReactElement } from 'react'
import './container.scss'

export default function Container(props: { children: ReactElement}) {
  return (
    <div className='container'>
      {props.children}
    </div>
  )
}