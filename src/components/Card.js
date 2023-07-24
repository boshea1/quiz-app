import React, { useState } from 'react'

const Card = ({details}) => {
    const [click,setClick]=useState(false)
   console.log(details.correct_answer)
  return (
    <div 
    className='text-center w-[80] h-auto border-2 border-black border-solid'
    >

        <h1 className='m-6 p-2 bg-green-100 text-3xl'>{details.question}</h1>
        <hr  className='w-[80%] m-auto mb-6'/>
        <p className='hover:cursor-pointer text-3xl bg-green-100 m-6'
         onClick={()=>setClick(!click)}>{click?details.correct_answer:'Find Out'}</p>

    </div>
  )
}

export default Card