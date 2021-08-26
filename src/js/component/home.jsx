import React, { useEffect } from "react";
import TodoList from "./TodoList.jsx";

const Home = () => {
	useEffect(() => {
		createNewUser("arantxamorcillo");
	}, []);

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
		let initiallist = await responseJason.json();
		console.log(initiallist);
	}

	return (
		<div className="container-fluid">
			<TodoList />
		</div>
	);
};

export default Home;
