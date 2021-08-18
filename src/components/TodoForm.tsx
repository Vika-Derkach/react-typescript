import React, { useState } from 'react'
export const TodoForm: React.FC = () => {
    const [title, setTitle] = useState<string>('')
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }
    const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            console.log(title);
            setTitle('')
        }
 
  
    }
    return (
    <div className="input-field mt2">
        <input value={title} onChange={changeHandler} 
        type="text" id='title' placeholder='Add...'
         onKeyPress={keyPressHandler} />
        <label htmlFor="title" className='active'>
            Add...
        </label>
    </div>
    )

}