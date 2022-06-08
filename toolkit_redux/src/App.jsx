
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByN } from './store/slices/counter';

function App() {  

  const  counter  = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <p>AQUÍ IRÍA EL LOGO</p>
        <p>count is: {counter}</p>
        <p>
          <button type="button" onClick={() => dispatch( increment() ) }>
            Increment
          </button>
          <button type="button" onClick={() => dispatch( decrement() ) }>
            Decrement
          </button>
          <button type="button" onClick={() => dispatch( incrementByN(4) ) }>
            Incremente By 2
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
      </header>
    </div>
  )
}

export default App
