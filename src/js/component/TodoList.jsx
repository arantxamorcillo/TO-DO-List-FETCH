import React, { useEffect, useState } from "react";
import Tasks from "./Tasks.jsx";
import Item from "./Item.jsx";
import Footer from "./footer.jsx";
import DeleteAllTasks from "./deleteAllTasks.jsx";

const TodoList = () => {
	const [tasks, setTasks] = useState([]);

	const [Task, setNewTask] = useState("");

	const [taskDuplicate, setTaskDuplicated] = useState(false);

	const [Duplicated, setDuplicated] = useState("");

	async function updateTasks(list) {
		let response = await fetch(
			`https://assets.breatheco.de/apis/fake/todos/user/arantxamorcillo`,
			{
				method: "PUT",
				body: JSON.stringify(list),
				headers: {
					"Content-Type": "application/json"
				}
			}
		);
		let responseJason = await response.json();
		console.log(responseJason);
	}

	// useEffect(() => {
	// 	createNewUser("arantxamorcillo");
	// }, []);

	async function createNewUser(user) {
		let response = await fetch(
			`https://assets.breatheco.de/apis/fake/todos/user/${user}`,
			{
				method: "POST",
				body: JSON.stringify([]),
				headers: {
					"Content-Type": "application/json"
				}
			}
		);
		let responseJason = await response.json();
		console.log(responseJason);
	}

	async function getTasks() {
		let response = await fetch(
			`https://assets.breatheco.de/apis/fake/todos/user/arantxamorcillo`,
			{
				headers: {
					"Content-Type": "application/json"
				}
			}
		);
		let responseJason = await response.json();
		console.log(responseJason);
		setTasks(responseJason);
	}

	useEffect(() => {
		createNewUser("arantxamorcillo");
		getTasks();
	}, []);

	async function DeleteTasksFetch() {
		let response = await fetch(
			`https://assets.breatheco.de/apis/fake/todos/user/arantxamorcillo`,
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json"
				}
			}
		);
		createNewUser("arantxamorcillo");

		let responseJson = await response.json();
		console.log(responseJson);
	}

	function DeleteTasks() {
		DeleteTasksFetch();
		setTasks([]);
	}

	function Change(event) {
		setNewTask(event.target.value);
	}

	function Enter(event) {
		if (event.key === "Enter") {
			let value = event.target.value;
			let tasksLowerCase = tasks.map(task => task.label.toLowerCase());

			if (tasksLowerCase.includes(value.toLowerCase())) {
				setTaskDuplicated(true);
				setDuplicated(value);
			} else {
				if (value === "") {
					alert("task cant be empty");
				} else {
					let taskObject = { label: Task, done: false };
					const newtasks = [...tasks, taskObject];
					updateTasks(newtasks);
					setTasks([...tasks, taskObject]);
				}

				setTaskDuplicated(false);
			}

			event.target.value = "";
		}
	}

	function removeTask(taskToRemove) {
		setTasks(tasks.filter(task => task.label !== taskToRemove));
	}

	return (
		<div className="diary">
			<h1 className="title-list">TO DO</h1>
			<input
				className="New-Task"
				type="text"
				placeholder="What do you need to do?"
				onChange={Change}
				onKeyPress={Enter}
			/>
			<ul className="Task-list">
				<Tasks
					tasks={tasks}
					removeTask={removeTask}
					taskDuplicate={taskDuplicate}
					Task={Task}
					Duplicated={Duplicated}
				/>
				{/* {tasks.map((it, i) => {
					return <Item task={it} key={i} />;
				})} */}
				<Footer tasks={tasks} />
			</ul>
			<DeleteAllTasks DeleteTasks={DeleteTasks} />
		</div>
	);
};

export default TodoList;
