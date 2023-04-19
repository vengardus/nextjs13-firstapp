import React from 'react'

export const Button = ({ children, handleClick }) => {
  return (
    <button
      className="border-2 px-8 py-2 text-gray-300 hover:bg-gray-300 hover:text-black"
      onClick={ handleClick }
    >
      {children}
    </button>
  )
}

export const ButtonParm = ({ children, handleClick, parm }) => {
  return (
    <button
      className="border-2 px-8 py-2 text-gray-300 hover:bg-gray-300 hover:text-black"
      onClick={ (e) => handleClick(e, parm) }
    >
      {children}
    </button>
  )
}