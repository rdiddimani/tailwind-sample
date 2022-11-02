import React from 'react'

const TodoMap = ({ todoList, handleDel }) => {
    return (
        <div className='mt-5 text-left'>
            {
                todoList.map((item, index) => {
                    return <div key={index} className="flex w-48 justify-between">
                        <li>{item.name}</li>
                        <button data-id={item.id} onClick={(e) => { handleDel(e) }}>Del</button>
                    </div>
                })
            }
        </div>
    )
}

export default TodoMap