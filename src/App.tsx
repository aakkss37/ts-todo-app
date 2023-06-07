import React, { useState } from 'react'
import './App.css'
import InputFiels from './components/InputFiels'
import TodoList from './components/TodoList';

// TYPE
// let name: string; //--> this has to be a string
// let age: number; //--> this has to be a number
// let isStudent: boolean; //--> this has to be a boolean
// let hobies: string[]; //--> this has to be a array of string
// const hostel: [number, string] = [5, "3rd floor"]; //--> this has to be a "tupple" => can store data as defined

// // let person: object;     //---> not a good idea.. because this is not defining that what type of element this object going to carry. 
// //--- solution ---//

// type Person = {
// 	name: string;
// 	age: number;
// 	working?: boolean;
// }
// const person: Person = {
// 	name: "amar",
// 	age: 23,
// }

// interface PersonDeatil {
// 	name: string;
// 	age: number;
// 	working?: boolean;
// }
// const personDeatil: PersonDeatil = {
// 	name: "amar",
// 	age: 23,
// }




// let allPerson: Person[]; // --->  can contain array of object of Person type only

// let price: number | string // the symbol "|" is called union in ts. which means.. price can be number || string

// const sum = (x: number, y: number): number => {
// 	return x + y;
// }
// sum(10, 20);

// let personName: unknown; // from unknown data dype

// const functionName = (name: string): void => {console.log(name)}; // return undefined
// const funName = (name: string): never => {
// 	console.log(name)
// 	throw new Error(name);
// }; // return nothing

export interface TodoModal{
	id: number;
	todo: string;
	isDone: boolean
}


const App: React.FC = () => {
	
	// const [todo, setTodo] = useState<string | number>("")
	const [todo, setTodo] = useState<string>("")
	const [todos, setTodos] = useState<TodoModal[]>([])
	// console.log(todo)


	const handleAddTodo = (e: React.FormEvent)=> {
		e.preventDefault()
		if(todo){
			setTodos((prev)=> (
				[
					...prev,
					{
						id: Date.now(),
						todo: todo,
						isDone: false,
					}
				]
			))
			setTodo("")
		}
	}

	console.log(todos)

	return (
		<div className='App'>
			<h1 className='heading'>Todo On TypeScript</h1>

			<InputFiels 
				todo={todo}
				setTodo={setTodo}
				handleAddTodo={handleAddTodo}
			/>

			<TodoList
				todos={todos}
				setTodos={setTodos}
			/>
		</div>
	)
}

export default App
