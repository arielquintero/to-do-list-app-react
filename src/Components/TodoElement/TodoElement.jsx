function TodoElement({ item, id, setIsEdit, onDelete, onChecked }) {
	return (
		<div className="bg-[#fefefe] flex mb-4 rounded-xl">
			<div className="w-64 ml-2 text-start m-auto ">
				<label
					htmlFor={id}
					className={item.completed ? "line-through" : ""}
				>
					<div className="flex">
						<input
							className="ml-2"
							type="checkbox"
							id={id}
							checked={item.completed}
							onChange={() => onChecked(id)}
						/>
						<p className="ml-3">{item.title}</p>
					</div>
				</label>
			</div>
			<div className="flex justify-end p-3">
				{item.completed ? (
					""
				) : (
					<button
						className="bg-blue-500 hover:bg-blue-700 rounded-md mx-5 px-4 text-white"
						onClick={() => setIsEdit(true)}
					>
						Edit
					</button>
				)}

				<button
					className="bg-red-500 hover:bg-red-700 rounded-md mx-5 py-3 px-4 text-white"
					onClick={() => onDelete(item.id)}
				>
					Delete
				</button>
			</div>
		</div>
	);
}
export default TodoElement;
