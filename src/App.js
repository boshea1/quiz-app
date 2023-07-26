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
  const [category, setCategory] = useState('')
  const [clicked,setClicked]=useState(false)
  const baseURL=`https://opentdb.com/api.php?amount=10${category?`&category=${category}`:''}`
  useEffect(()=>{
    axios.get(baseURL).then((response) => {
      setQuestions(response.data);
    });
  },[baseURL])
  
  const onToggle = (e) => {
    console.log(e)
    addInteractive()
  }
  
  const options = {geography:22, history:23}
  const onOptionChangeHandler = (event) => {
    const c = event.target.value
    console.log("User Selected Value - ", event.target.value)
    setCategory(options[c])
    setClicked(true)
    
  }

  const handleClicked = () => {
    setClicked(false)
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
          <div>
          <select onChange={onOptionChangeHandler}>
          <option>Please choose one option</option>
          {Object.keys(options).map((keyname,i)=>(
            <option key={i}>{keyname}</option>
          ))}
          </select>
          </div>
 
</div>
     <div className='h-[800px] '>
      {questions && questions.results.map((item, id)=>
          <Card key={id} details={item} category={category} clicked={clicked} handleClicked={handleClicked}/>
      )

      }
     </div>
    </div>
  );
}

export default App;
