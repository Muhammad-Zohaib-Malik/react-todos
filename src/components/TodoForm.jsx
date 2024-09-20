/* eslint-disable react/prop-types */
import { useState } from "react"

const TodoForm = ({onAddTodo}) => {
  const [inputValue, setInputValue] = useState({})
 
  const handleFormSubmit=(e)=>{
    
    e.preventDefault()
    onAddTodo(inputValue)
setInputValue({id:"",content:"",checked:false})

    
  }

  const handleInputChange=(value)=>{
    setInputValue({id:value,content:value,checked:false})
  }
  


  return (
    <form onSubmit={handleFormSubmit} className="flex items-center justify-center w-full mt-10 ">
        <input onChange={(e) => handleInputChange(e.target.value)} value={inputValue.content} type="text" autoComplete="off" className="rounded-tl-md rounded-bl-md w-[250px]  h-[7vh]  outline-none " placeholder="Enter Something" />
        <button className="bg-zinc-400  h-[7vh] px-4 rounded-tr-md rounded-br-md " type="submit">Add task</button>
      </form>
  )
}

export default TodoForm