import {  useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, updateTodo } from "../feature/todos/todoSlice"





const Form = () => {

    const {edit} = useSelector(state => state.todos)
  

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const dispatch = useDispatch()
 

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(title)
        !edit.isEdit ? 
       ( dispatch(addTodo({title, description}))) : 
       ( dispatch(updateTodo({id : edit.todo._id, title, description})))
        setTitle("")
        setDescription("")

    }

    useEffect(() => {
        setTitle(edit.todo.title)
        setDescription(edit.todo.description)
    }, [edit])

  

    return (
        <form onSubmit={handleSubmit} className=" p-4 shadow-2xl" >
            <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border rounded-sm px-1" type="text" required placeholder="Enter your title" />
            <input value={description} onChange={(e) => setDescription(e.target.value)} className="w-full border mt-4 rounded-sm px-1" type="text" required placeholder="Enter your description" />
            <button className="w-full my-4 bg-blue-300 p-1 rounded-sm text-white cursor-pointer hover:bg-blue-400" >Add</button>
        </form>

    )
}

export default Form