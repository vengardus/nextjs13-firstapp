import React from 'react'

export const Button = ({ children, handleClick, className }) => {
  return (
    <button
      className={`border-2 px-8 py-2 text-gray-300 hover:bg-gray-300 hover:text-black ${className}`}
      onClick={ handleClick }
    >
      {children}
    </button>
  )
}

export const ButtonParm = ({ children, handleClick, parm, className }) => {
  return (
    <button
      className={`border-2 px-8 py-2 text-gray-300 hover:bg-gray-300 hover:text-black ${className}`}
      onClick={ (e) => handleClick(e, parm) }
    >
      {children}
    </button>
  )
}
