import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import Avatar from "../../assets/avatar.png";
import Arrow from "../../assets/arrow.png";
import Trash from "../../assets/trash.png";
import H1 from "../../components/Title";
import Button from "../../components/Button";
import ContainerForm from "../../components/ContainerForm";
import { Container, Image, User } from "./styles";

const Users = () => {
	const [users, setUsers] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		async function fetchUsers() {
			const { data: newUsers } = await Axios.get(
				"http://localhost:3001/users"
			);
			setUsers(newUsers);
		}
		fetchUsers();
	}, []);

	async function deleteUser(userId) {
		await Axios.delete(`http://localhost:3001/users/${userId}`);
		const newUsers = users.filter((user) => user.id !== userId);
		setUsers(newUsers);
	}

	function goBackPage() {
		navigate("/");
	}

	return (
		<Container>
			<Image alt="people talking" src={Avatar} />

			<ContainerForm isBlur={true}>
				<H1>Usuários</H1>

				<Button isBack={true} onClick={goBackPage}>
					<img alt="arrow" src={Arrow} /> Voltar
				</Button>

				<ul>
					{users.map((user) => (
						<User key={user.id}>
							<p>{user.name}</p>
							<p>{user.age}</p>
							<button onClick={() => deleteUser(user.id)}>
								<img alt="trash" src={Trash} />
							</button>
						</User>
					))}
				</ul>
			</ContainerForm>
		</Container>
	);
};

export default Users;
