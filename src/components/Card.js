import { useStoreState } from 'easy-peasy';
import React, {useState } from 'react'

const Card = ({details}) => {
    const [click,setClick]=useState(false)
    const  interactive = useStoreState((state) => state.interactive);
    const [answered,setAnswered] = useState(false)
    const [isAlertVisible,setIsAlertVisible] = useState(false)

const handleClick = (ans) => {
  console.log(ans === details.correct_answer)
  if (ans===details.correct_answer){
    setAnswered(!answered)
  } else {
    setIsAlertVisible(true);
    setTimeout(() => {
               setIsAlertVisible(false);
         }, 1000);
  }
}

      
const arr = [details.correct_answer, details.incorrect_answers[0], details.incorrect_answers[1], details.incorrect_answers[2]]
const shuffled  = arr.filter(function(x){
  return x !== undefined;
}).sort((a,b) => 0.5 - Math.random())

console.log('shuffled',shuffled)
  return (
    <div 
    className='text-center w-[80] h-auto border-2 border-black border-solid'
    >
        <h1 className='m-6 p-2 bg-green-100 text-3xl'>{details.question}</h1>
        <hr  className='w-[80%] m-auto mb-6'/>
        <span className='h-10 block'>{isAlertVisible?'incorrect':''}</span>
        {interactive?answered?'correct': details.type==='multiple'?
        <div className='mb-4'>
          { shuffled.map((item)=>
          <>
            <button onClick={()=>handleClick(item)} className='border-2 border-black p-2 mx-1'>{item}</button>
          </>
          )}
        </div>: details.type==='boolean'? <>{shuffled.sort().reverse().map((item)=><p className='hover:cursor-pointer text-3xl bg-green-100 m-6'
          onClick={()=>handleClick(item)}>{item}</p>)}</> : 'nope' : <button onClick={()=>setClick(!click)}>{click?details.correct_answer:'find out'}</button>
}
    </div>
  )
}

export default Card