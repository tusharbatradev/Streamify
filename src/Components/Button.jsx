import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='bg-gray-200 m-3 px-5 py-2 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button
