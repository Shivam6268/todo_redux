

import { useDispatch, useSelector } from "react-redux"
import ListItem from "./ListItem"
import { useEffect } from "react"
import { fetchTodo } from "../feature/todos/todoSlice"



const ListGroup = () => {

  const {allTodos, isLoading, isError} = useSelector(state => state.todos)

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchTodo())
  }, [dispatch])


  if(isLoading){
    return (
      <h1 className="text-gray-400 font-bold text-center py-4">Loading...</h1>
    )
  }

  if(isError){
    return (
      <h1 className="text-red-400 font-bold text-center py-4">Somthing Went Wrong...</h1>
    )
  }

 
  return (
    <ul className="mt-8 ">
     {
      allTodos.map(todo => <ListItem id={todo.id} key={todo.id} todo={todo}/>)
     }
      
    </ul>
  )
}

export default ListGroup 