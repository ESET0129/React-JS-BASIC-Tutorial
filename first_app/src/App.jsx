import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  //count=0;
  //increment=() =>count+1;
  //decrement=() =>count-1;

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>S + S</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )

  //changes new made 
  return(
    <div>
      <h1>COUNTER</h1>
    <h2 id='a'>0</h2>
    <button onClick={()=>{
      const element=document.getElementById('a');
      var current=parseInt(element.textContent)
      element.textContent=current+1;
    }
    }>
      increment</button>
      

      
    
    <button onClick={()=>{
      const element=document.getElementById('a');
      var current=parseInt(element.textContent)
      element.textContent=current-1;
    }
    }>
      decrement</button>
      </div>  

  )
  
}
/*
function counter(){
  count=0;
  increment=() =>count+1;
  decrement=() =>count-1;git


}
  //this wont work because we are not using state variable due to which DOM is getting connected
  //this.forceUpate -> focibly component re render to use this
*/
export default App
