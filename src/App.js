import { useState } from 'react';

import { LoginForm } from '@containers';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, emailReducer, islogged } from './redux/actions'

import './App.css';

function App() {
  const [email, setEmail] = useState("")
  const counter = useSelector(state => state.counterReducer)
  const isLogged = useSelector(state => state)
  console.log(isLogged.isLogged)
  const dispatch = useDispatch()


  const submitEmail = () => {
    dispatch(emailReducer(
      email
    )
   )

  }

  return (
    <div className="App">
      {/* <LoginForm />  */}
      <h1>
        Counter { counter  }
      </h1>

      <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
      <button type='submit' onClick={() => submitEmail(dispatch(islogged()))}>Submit</button>

      <button onClick={() => dispatch(increment())}>+</button>
      {counter == 0 ? <button disabled onClick={() => dispatch(decrement ())}>-</button> : <button onClick={() => dispatch(decrement ())}>-</button>}
      

      {isLogged.isLogged ? <h3>VAluable information here: nothing decode it</h3> : null}
      
    </div>
  );
}

export default App;
