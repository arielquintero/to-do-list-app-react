import { useState } from "react";

function FormEdit({ item, setIsEdit, onUpdate}) {
	const [newValue, setNewValue] = useState(item.title);

	function handleSubmit(e) {
		e.preventDefault();
	}
	function handleChange(e) {
		const value = e.target.value;
		setNewValue(value);
	}
	function handleUpdateTodo() {
		onUpdate(item.id, newValue);
		setIsEdit(false);
	}
    function handleCancelEditTodo(){
        setIsEdit(false);
    }
	return (
		<form
			className="container flex bg-[#fefefe] mb-4 py-2"
			onSubmit={handleSubmit}
		>
			<input
				type="text"
				className="inline-block w-auto ml-2 m-auto rounded-sm border-none"
				onChange={handleChange}
				value={newValue}
			/>
			<button
				className="bg-green-500 hover:bg-green-600 rounded-md mx-5 px-4 py-3 text-white"
				onClick={handleUpdateTodo}
			>
				Update
			</button>
            <button
				className="bg-orange-500 hover:bg-orange-600 rounded-md mx-5 px-4 py-3 text-white"
				onClick={handleCancelEditTodo}
			>
				Cancel
			</button>
		</form>
	);
}

export default FormEdit;
