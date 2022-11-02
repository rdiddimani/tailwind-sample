import React, { useState } from 'react'
import FetchData from './fetchData'
import Login from './Login'
import Todo from './todo'
import { useLogin, useTheme, useTodo } from './zustand'

const App = () => {

  const [theme, setTheme] = useState(false)

  const user = useLogin(state => state.login);
  const listLen = useTodo(state => state.list).length;
  const dark = useTheme(state => state.themeValDark);
  const light = useTheme(state => state.themeValLight);
  const themeVal = theme ? light : dark;



  return (
    <div className={`min-h-screen w-full ${themeVal.textColor} ${themeVal.bgColor}`}>
      <h1 className='text-center pt-14 font-bold'>"Zustand" vs Other global state management tools</h1>
      <div className='flex justify-end mr-20'>
        <button className='mt-5 text-blue-700 font-bold' onClick={() => { setTheme(!theme) }}>Theme swap</button>
      </div>
      <h1 className='flex mr-20 justify-end mt-5 text-blue-700 font-bold'>Todo Count: {listLen}</h1>
      <Login />
      {
        user &&
        <div className='w-3/4 mx-auto mt-10 flex'>
          <Todo />
          <span className='border-2 border-black h-96'></span>
          <FetchData />
        </div>
      }
    </div >
  )
}

export default App