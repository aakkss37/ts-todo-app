import React from 'react'
import { TodoModal } from '../App'
import SingleTodo from './SingleTodo'

interface Props {
	todos: TodoModal[]
	setTodos: React.Dispatch<React.SetStateAction<TodoModal[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
	return (
		<div style={{ width: "100%" }}>
			{
				todos.map((todo, index) => (
					<div style={{ width: '500px', height: "50px", background: "gray", display: "flex", alignItems: "center", justifyContent: "space-between", margin: '2rem auto', padding: "10px", borderRadius: "5px" }} key={index}>
						<SingleTodo
							todo={todo}
							setTodos={setTodos}
						/>
					</div>
				))
			}
		</div>
	)
}

export default TodoList