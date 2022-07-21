import React from "react";

interface Props {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	handleAdd: (e: React.FormEvent) => void;

};

const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {
	return (
		<form className="input" onSubmit={handleAdd}>
			<input
				className={"bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"}
				type="text" 
				placeholder="add task"
				value={todo}
				onChange={
					(e)=>setTodo(e.target.value)
				}
			/>
			<button
				className={"shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4  m-2 rounded"}
				type={"submit"}
			>Submit</button>
		</form>
	)
};

export default InputField;
