import React, { useRef, useState, useEffect } from "react";
import Axios from "axios";
import Users from "../../assets/user-cons.png";
import Arrow from "../../assets/arrow.png";
import Trash from "../../assets/trash.png";
import {
	Container,
	Image,
	ContainerForm,
	H1,
	InputLabel,
	Input,
	Button,
	User,
} from "./styles";

const App = () => {
	const [users, setUsers] = useState([]);
	const inputName = useRef();
	const inputAge = useRef();

	async function addNewUser() {
		const { data: newUser } = await Axios.post(
			"http://localhost:3001/users",
			{
				name: inputName.current.value,
				age: inputAge.current.value,
			}
		);

		setUsers([...users, newUser]);
	}
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

	return (
		<Container>
			<Image alt="people talking" src={Users} />

			<ContainerForm>
				<H1>Olá!</H1>

				<InputLabel>Nome</InputLabel>
				<Input ref={inputName} placeholder="Nome"></Input>

				<InputLabel>Idade</InputLabel>
				<Input ref={inputAge} placeholder="Idade"></Input>

				<Button onClick={addNewUser}>
					Cadastrar <img alt="arrow" src={Arrow} />
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

export default App;
