import React, { useState } from 'react';
import { useLogin, useTodo } from './zustand.js';

const Login = () => {
    const [inputVal, setInputVal] = useState("");

    const loginName = useLogin(state => state.login);
    const addLogin = useLogin(state => state.addLogin);
    const removeLogin = useLogin(state => state.removeLogin);
    const clear = useTodo(state => state.clear)

    const handleLogin = (e) => {
        e.preventDefault()
        addLogin(inputVal);
        setInputVal("")
    }

    const handleLogout = () => {
        removeLogin();
        clear();
    }



    return (
        <div className='mt-5 mr-20 flex justify-end font-bold text-blue-700'>
            {
                loginName ?
                    <form className='flex gap-5 ' onSubmit={() => { handleLogout() }}>
                        <h1>{loginName}</h1>
                        <button class='button addon'>Logout</button>
                        <h2>Buttons</h2>
                        <button class='button' data-btn-type="primary">Primary</button>
                        <button class='button' data-btn-type="outline">Outline</button>
                    </form> :
                    <form onSubmit={(e) => { handleLogin(e) }}>
                        <input type="text" required className='border-2 border-blue-200 mx-5' value={inputVal || ""} onChange={(e) => { setInputVal(e.target.value) }} />
                        <button>Login</button>
                    </form>
            }
        </div>
    )
}

export default Login