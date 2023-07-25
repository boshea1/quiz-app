import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import axios from 'axios';
import Toggle from 'react-bootstrap-toggle';
import { useStoreActions, useStoreState } from 'easy-peasy';

function App() {
  const  interactive = useStoreState((state) => state.interactive);
  const addInteractive = useStoreActions((actions) => actions.addInteractive);
  const [questions, setQuestions] = useState('')
  const baseURL='https://opentdb.com/api.php?amount=10'
  useEffect(()=>{
    axios.get(baseURL).then((response) => {
      setQuestions(response.data);
    });
  },[])

  const onToggle = (e) => {
    console.log(e)
    addInteractive()
  }
  
  
  return (
    <div className="h-[100vh] w-full">
     <div className={'border-2 text-center text-4xl border-black m-6 p-2 bg-green-50'}>
      Quiz
     </div> 
      <div display={'flex inline  w-full flex-row'}>
        <div className='mb-10'>
      <Toggle
          onClick={(event)=>onToggle(event)}
          off={<h2>{interactive? 'ON':'OFF'}</h2>}
          on={<h2>Interactive</h2>}
          size="xs"
          offstyle="danger"
          active={interactive}
          />
          </div>
          {/* <div className='inline ml-20'>{interactive?'ON':'OFF'}</div> */}
 
</div>
     <div className='h-[800px] '>
      {questions && questions.results.map((item, id)=>
          <Card key={id} details={item}/>
      )

      }
     </div>
    </div>
  );
}

export default App;
