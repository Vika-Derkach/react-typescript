import React, { useRef } from 'react'
export const TodoForm: React.FC = () => {
    const ref = useRef<HTMLInputElement>(null)
    // const [title, setTitle] = useState<string>('')
    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }
    const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
        //    console.log(title);
        //    setTitle('')
        console.log(ref.current!.value)
        ref.current!.value = ''
        }
 
  
    }
    return (
    <div className="input-field mt2">
        <input
        // value={title} 
         //onChange={changeHandler} 
         ref={ref}
        type="text" id='title' placeholder='Add...'
         onKeyPress={keyPressHandler} />
        <label htmlFor="title" className='active'>
            Add...
        </label>
    </div>
    )

}