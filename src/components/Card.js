import { useStoreActions, useStoreState } from 'easy-peasy';
import React, { useState } from 'react'

const Card = ({details, category, clicked, handleClicked}) => {
  const setScore = useStoreActions((actions) => actions.setScore);
    const [click,setClick]=useState(false)
    const  interactive = useStoreState((state) => state.interactive);
    const [answered,setAnswered] = useState(false)
    const [isAlertVisible,setIsAlertVisible] = useState(false)

const handleClick = (ans) => {
 
  if (ans===details.correct_answer){
    setAnswered(!answered)
    setScore(1)
  } else {
    setIsAlertVisible(true);
    setTimeout(() => {
               setIsAlertVisible(false);
         }, 1000);
  }
}




const arr = [details.correct_answer, details.incorrect_answers[0], details.incorrect_answers[1], details.incorrect_answers[2]]


const shuffled =  (arr.filter(function(x){
  return x !== undefined;
}).sort())



  if (clicked && answered){
    console.log('clicked')
    setAnswered(false)
    handleClicked()
    
    
  }




  return (
    <div 
    className='text-center w-[80] h-auto border-2 border-black border-solid'
    >
        <h1 className='m-6 p-2 bg-green-100 text-3xl'>{details.question}</h1>
        <hr  className='w-[80%] m-auto mb-6'/>
        <span className='h-10 block'>{isAlertVisible?'incorrect':''}</span>
        {interactive?answered?'correct': details.type==='multiple'?
        <div className='mb-4'>
          {shuffled.map((item,id)=>
          <>
            <button key={id} onClick={()=>handleClick(item)} className='border-2 border-black p-2 mx-1'>{item}</button>
          </>
          )}
        </div>: details.type==='boolean'? <>{shuffled.sort().reverse().map((item,id)=><p className='hover:cursor-pointer text-3xl bg-green-100 m-6'
          onClick={()=>handleClick(item)} key={id}>{item}</p>)}</> : 'nope' : <button onClick={()=>setClick(!click)}>{click?details.correct_answer:'find out'}</button>
}
    </div>
  )
}

export default Card