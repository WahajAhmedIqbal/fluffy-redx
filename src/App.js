

import { addItem, deleteItem } from './redux/actions'
import {v4 as uuidv4, v4 } from 'uuid'

import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const [todoItem, setTodoItem] = useState('')
  const [editBtn, setEditBtn] = useState(false)
  const [editInpt, seteditInpt] = useState('')
  const todo = useSelector(state => state)

  const dispatch = useDispatch()

  const submitHandler = () => {
    const list = {
      id: v4(),
      item: todoItem
    }
    dispatch(addItem(list))
  }
  
  const deleteHandler = (id) => {
    console.log(id)
    dispatch(deleteItem(id))
  }

  const editHandler = (id) => {
    setEditBtn(true)
    const editInput = todo.filter(item => item.id === id)
    console.log(editInput[0].item)
  }

  return (
    <div style={{marginLeft: 10}} className="App">
      {/* <LoginForm />   */}
      <h5>Todo</h5>
      <input type='text' value={todoItem} onChange={(e) => setTodoItem(e.target.value)} />
      <button type='submit' onClick={submitHandler}>Submit</button>
      {editBtn ? <input type='text' value={editInpt} onChange={e => seteditInpt(e.target.value)} /> : null }
      <button type='button'>Submit</button>
      
      <ul>
        {
          todo.map((itm, ind) => (
            <li key={ind}>{itm.item} <button onClick={() => editHandler(itm.id)}>Edit</button> <button onClick={() => deleteHandler(itm.id)}>delete</button> </li>
          ))
        }
      </ul>
      
    </div>
  );
}

export default App;
