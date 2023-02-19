import { useEffect, useState } from "react";
import Todo from "../../ComponentContainer/Todo/Todo";

function TodoApp() {
	const [title, setTitle] = useState("");
	const [todos, setTodos] = useState(() => readTodosLocalStorage());
	const [isEdit, setIsEdit] = useState(false);
	// const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todosStore')) || [] );

	function handleInputChange(e) {
		const value = e.target.value;
		setTitle(value);
	}

	function handleSubmit(e) {
		e.preventDefault();

		const newTodo = {
			id: crypto.randomUUID(),
			title: title,
			completed: false,
		};

		setTodos([...todos, newTodo]);
		setTitle("");
	}

	function handleUpdate(id, value) {
		const tempTodo = [...todos];
		const item = tempTodo.find((item) => item.id === id);
		item.title = value;
		setTodos(tempTodo);
	}

	useEffect(() => {
		localStorage.setItem("todosStore", JSON.stringify(todos));
	}, [todos]);

	function readTodosLocalStorage() {
		const todosStore = localStorage.getItem("todosStore");
		return todosStore ? JSON.parse(todosStore) : [];
	}

	function handleDelete(id) {
		const newListTodo = todos.filter((item) => item.id !== id);
		setTimeout(() => {
			setTodos(newListTodo);
		}, 500);
	}

	function handleCheckTodo(id) {
		const newTodos = [...todos];
		newTodos.filter((todo, index) => {
			if (index === id) {
				todo.completed = !todo.completed;
				setIsEdit(isEdit);
			}
		});
		setTodos(newTodos);
	}

	return (
		<div className="container mx-auto bg-zinc-100 text-center">
			<h1 className="font-bold text-6xl m-4 text-teal-700">To Do List</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					required
					className="inline-block w-auto px-2 py-2"
					onChange={handleInputChange}
					value={title}
				/>
				<input
					type={"submit"}
					value="Create todo"
					className="mx-10 my-5 boder rounded-md bg-sky-600 px-2 py-2 text-white"
				/>
			</form>

			<div className="container capitalize">
				<ul>
					{todos.map((item, index) => (
						<li key={index} className="shadow-2xl">
							<Todo
								id={index}
								item={item}
								isEdit={isEdit}
								setIsEdit={setIsEdit}
								onUpdate={handleUpdate}
								onDelete={handleDelete}
								onChecked={handleCheckTodo}
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default TodoApp;
