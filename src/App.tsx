import React, {useState} from 'react';
import InputField from './components/InputField';
import TodoList from "./components/TodoList";
import Todo from './models/Todo';
import './index.css';

const App: React.FC = () => {
	const [todo, setTodo] = useState<string>("");
	const [todos, setTodos] = useState<Todo[]>([]);

	const handleAdd = (e: React.FormEvent) => {
		 e.preventDefault();
		todo && setTodos(
			[...todos, {id: Date.now(), title: todo, isCompleted: false}]
		);
		setTodo("")
	}
	console.log(todos);

	return (
		<div className='content-center'>
			<span className='text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate'>Todo</span>
			<InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
			<TodoList todos={todos} setTodos={setTodos}/>
		</div>
	)
}
export default App;
