import React, {useState} from 'react';
import InputField from './components/InputField';
import TodoList from "./components/TodoList";
import Todo from './models/Todo';

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
		<div className='App'>
			<span className='heading'>Todo</span>
			<InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
			<TodoList todos={todos} setTodos={setTodos}/>
		</div>
	)
}
export default App;
