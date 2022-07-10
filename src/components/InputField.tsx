import React from "react";

interface Props {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
};

const InputField: React.FC<Props> = ({todo, setTodo}) => {
	return (
		<form className="input">
			<input
				type="text" 
				placeholder="add task"
				value={todo}
				onChange={
					(e)=>setTodo(e.target.value)
				}
			/>
			<button type={"submit"}>Submit</button>
		</form>
	)
};

export default InputField;
