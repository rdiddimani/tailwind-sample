import React, { useState } from 'react'
import TodoMap from './todoMap';
import { useTodo } from './zustand';

const Todo = () => {
  const [inputVal, setInputVal] = useState("");

  const todoList = useTodo((state) => state.list);
  const addList = useTodo(state => state.addList);
  const removeList = useTodo(state => state.deleteItem);

  const handleSubmit = (e) => {
    e.preventDefault();
    addList(inputVal)
    setInputVal("")
  }
  const handleDel = (e) => {
    const targetId = e.target.dataset.id;
    removeList(targetId)
  }


  return (
    <div className='w-1/2  text-center'>
      <h1>Adding Removing Data from Storage</h1>
      <form className='mt-10' onSubmit={(e) => { handleSubmit(e) }}>
        To-Do:
        <input type="text" required className='border-2 border-blue-400 mx-5' value={inputVal || ""} onChange={(e) => { setInputVal(e.target.value) }} />
        <button className='px-2 bg-green-200 rounded-sm'>Add</button>
      </form>
      <TodoMap
        todoList={todoList}
        handleDel={handleDel}
      />
    </div>
  )
}

export default Todo