import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import axios from 'axios';

function App() {
  const [question, setQuestion] = useState('')
  const baseURL='https://opentdb.com/api.php?amount=10'
  useEffect(()=>{
    axios.get(baseURL).then((response) => {
      setQuestion(response.data);
    });
  },[])
  
  
  return (
    <div className="h-[100vh] w-full">
     <div className={'border-2 text-center text-4xl border-black m-6 p-2 bg-green-50'}>
      Quiz
     </div>
     <div className='h-[800px] '>
      {question && question.results.map((item, id)=>
          <Card key={id} details={item}/>
      )

      }
     </div>
    </div>
  );
}

export default App;
