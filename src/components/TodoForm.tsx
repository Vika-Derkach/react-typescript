import React from 'react'
export const TodoForm: React.FC = () => {
    return (
    <div className="input-field mt2">
        <input type="text" id='title' placeholder='Add...' />
        <label htmlFor="title" className='active'>
            Add...
        </label>
    </div>
    )
}