import React from "react";
import propTypes from "prop-types";

const Tasks = ({ tasks, taskDuplicate, Duplicated, removeTask }) => {
	return tasks.map(task => {
		console.log(`esto es la lista ${tasks}`);
		if (
			taskDuplicate &&
			Duplicated.toLowerCase() === task.label.toLowerCase()
		) {
			return (
				<li key={Duplicated} className={"task alert"}>
					{task.label}
					<span
						className="trash"
						onClick={function Remove() {
							removeTask(task.label);
						}}>
						<i className="far fa-trash-alt"></i>
					</span>
				</li>
			);
		} else {
			return (
				<li key={task.label} className={"task"}>
					{task.label}
					<span
						className="trash"
						onClick={function Remove() {
							removeTask(task.label);
						}}>
						<i className="far fa-trash-alt"></i>
					</span>
				</li>
			);
		}
	});
};

Tasks.propTypes = {
	tasks: propTypes.array,
	removeTask: propTypes.func,
	taskDuplicate: propTypes.bool,
	Duplicated: propTypes.string
};
export default Tasks;
