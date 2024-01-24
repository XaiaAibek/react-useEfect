import React, { useEffect, useState } from "react";
import "./Header.css"

const Header = () => {
	const [users, setUsers] = useState([]);

	const fetchUsers = async () => {
		try {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/users"
			);
			const data = await response.json();
			setUsers(data);
		} catch (error) {
			console.error("Error fetching users:", error);
		}
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	const handleGetUsers = () => {
		fetchUsers();
	};

	const handleDeleteUsers = () => {
		setUsers([]);
	};

	return (
		<div className="content">
			<button onClick={handleDeleteUsers}>Удалить пользователей</button>
			<button onClick={handleGetUsers}>Получить пользователей</button>
			<div className="users">
				<div className="cards">
				<ul className="card">
					{users.map((user) => (
						<li key={user.id} className="text">{user.name}</li>
					))}
				</ul>

				</div>
			</div>
		</div>
	);
};

export default Header;
