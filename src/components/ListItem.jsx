import { useDispatch } from "react-redux"
import { edit, remove, removeTodo } from "../feature/todos/todoSlice"





const ListItem = ({todo}) => {

    const dispatch = useDispatch()


    const deleteItem = id => {
      dispatch(removeTodo(id))
      dispatch(remove(id))
    }

    const editItem = todo => {
        dispatch(edit(todo))
    }

   


  return (
     <li className="my-4 p-4 bg-blue-200 rounded-sm shadow-2xl flex justify-between">
                <div>
                    <p className="text-gray-800">No: {todo._id}</p>
                    <h2 className="text-xl pt-2 text-gray-500 font-bold">{todo.title}</h2>
                    <h2 className="text-xl pt-2 text-gray-500 font-bold">{todo.description}</h2>
                </div>
                <div>
                    <button onClick={() => editItem(todo)}  className="bg-yellow-200 cursor-pointer hover:bg-yellow-300 p-1 m-1 rounded-sm " >
                        edit
                    </button>
                    <button onClick={() => deleteItem(todo._id)} className="bg-red-200 cursor-pointer hover:bg-red-300 p-1 m-1 rounded-sm ">
                        delete
                    </button>
                </div> 
            </li>
  )
}

export default ListItem