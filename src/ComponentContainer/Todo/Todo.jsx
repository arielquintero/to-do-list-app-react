import { useState } from "react";
import FormEdit from "../../Components/FormEdit/FormEdit";
import TodoElement from "../../Components/TodoElement/TodoElement";

function Todo({ item, id, isEdit, setIsEdit, onUpdate, onDelete, onChecked }) {
	

	return (
		<>
			{isEdit ? (
				<FormEdit
					item={item}
					setIsEdit={setIsEdit}
					onUpdate={onUpdate}
				/>
			) : (
				<TodoElement
                    id={id}
					item={item}
					onDelete={onDelete}
					setIsEdit={setIsEdit}
                    onChecked={onChecked}
				/>
			)}
		</>
	);
}

export default Todo;
