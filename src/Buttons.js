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
    <section className='p-6'>
        <h1 className='mb-2'>Buttons</h1>
        <div className='flex'>
             <button class='button'>Default</button>
            <button class='button' data-btn-type="primary">Primary</button>
            <button class='button' data-btn-type="secondary">Secondary</button>
            <button class='button' data-btn-type="success">Success</button>
            <button class='button' data-btn-type="danger">Danger</button>
        </div>
        <h1 className='mt-5  mb-2'>Outline Buttons </h1>
        <div className='flex'>
            <button class='button' data-btn-type="outline">Outline Default</button>
            <button class='button' data-btn-type="outline-danger">Outline Danger</button>
            <button class='button' data-btn-type="outline-success">Outline Success</button>
            <button class='button' data-btn-type="outline-warning">Outline Warning</button>
        </div>
        <h1 className='mt-5 mb-2'>Links  </h1>
        <div className='flex'>
            <button class='button' data-btn-type="link">Link Default</button>
            <button class='button' data-btn-type="link-danger">Link Danger</button>
            <button class='button' data-btn-type="link-success">Link Success</button>
            <button class='button' data-btn-type="link-warning">Link Warning</button>
        </div>
    </section>
    )
}

export default Login