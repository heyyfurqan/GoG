import React from 'react'
interface Props{
    children:string;
    onClick : () => void;
    color?:'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';  //optional property (?), // giving a set of assignable values
}

const Button = ({children, onClick, color='primary'}:Props) => {
  return (
    <button className={'btn btn-'+ color } onClick={onClick} >{children}</button>
  )
}

export default Button