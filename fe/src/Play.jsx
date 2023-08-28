import React, {useState} from 'react'
import Leftbar from './components/Leftbar';
import Header from './components/Header';

function Play() {
  //let counter = 0;  
  let[counter, setCounter] = useState(0);
  const [inputValue, setInputValue]= useState();

  const increment = () =>{
    // counter +=1;  
    // console.log(counter);
    setCounter(counter += 1)
  }

  const changeValue = (event)=>{
    const newValue = event.target.value;
    setInputValue(newValue)
  }
  return (
    <div>{counter} 
      <button type="button" onClick={increment}> Increment</button>

      <div>
        <br />
        <input type="text" placeholder='enter something...' onChange={changeValue}/>
        {inputValue}
      </div>
      <Header />
      <Leftbar />

    </div>
  )
}

export default Play