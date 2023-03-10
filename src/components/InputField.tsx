import React from 'react'
import './styles.css'

interface Props {
    todo: string;
    setTodo:  React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e:React.FormEvent )=> void //since our function don't return anything we use void 
}

export const InputField: React.FC<Props> = ({todo,setTodo, handleAdd}) => {
  return (
<form className='input' onSubmit={handleAdd}>
    <input 
    type="input" 
    value={todo}
    onChange={(e)=>setTodo(e.target.value)}
    placeholder='Enter task' 
    className='input_box' 
    
    />
    <button className='input_submit' type='submit'>Go</button>
</form>
  )
}
