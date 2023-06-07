import React from 'react'

interface Props {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	handleAddTodo: (e: React.FormEvent) => void
}

const InputFiels: React.FC<Props> = ({ todo, setTodo, handleAddTodo }) => {

	return (
		<form style={{ width: '500px' }} onSubmit={handleAddTodo}>
			<input 
				type='input' 
				placeholder='Enter You TODO' 
				style={{ width: "70%" }} 
				value={todo}
				onChange={(e)=> setTodo(e.target.value)}
			/>
			<button style={{ width: "20%" }} type='submit'>Add</button>
		</form>
	)
}

export default InputFiels