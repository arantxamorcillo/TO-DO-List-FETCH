import React from "react";
import propTypes from "prop-types";

const DeleteAllTasks = ({ DeleteTasks }) => {
	return (
		<button className="btn" onClick={DeleteTasks}>
			Clear your day
		</button>
	);
};

DeleteAllTasks.propTypes = {
	DeleteTasks: propTypes.func
};

export default DeleteAllTasks;
