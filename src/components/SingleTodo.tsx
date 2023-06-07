import React, { useState } from 'react'
import { TodoModal } from '../App'
interface Props {
	todo: TodoModal
	setTodos: React.Dispatch<React.SetStateAction<TodoModal[]>>
}

const SingleTodo: React.FC<Props> = ({ todo, setTodos }) => {

	const [todoText, setTodoText] = useState<string>(todo.todo)
	const [edit, setEdit] = useState<boolean>(false)

	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		setTodoText(e.currentTarget.value);
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		setTodos((prevList)=> {
			const foundIndex = prevList.findIndex((item)=> item.id === todo.id)
			prevList[foundIndex] = {
				...prevList[foundIndex],
				todo: todoText
			}
			return prevList
		})
		setEdit(false)
	}

	return (
		<form style={{width: "100%", display: "flex", alignItems:"center", justifyContent:"space-between"}} >
			{
				edit ?
				<>
					<input
						style={{ color: "whitesmoke", }}
						value={todoText}
						onChange={handleChange}
					/>
					<button type='submit' onClick={handleSubmit}>ok</button>
				</>
					:
					<h3>{todoText}</h3>
			}


			<button onClick={()=> setEdit(true)} type='button'>
				edit
			</button>

		</form>
	)
}

export default SingleTodo