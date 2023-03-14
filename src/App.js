import React, { useState } from "react";
import Users from "./assets/user-cons.png";
import Arrow from "./assets/arrow.png";
import Trash from "./assets/trash.png";
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
	const [name, setName] = useState();
	const [age, setAge] = useState();

	function changeInputName(event) {
		setName(event.target.value);
	}

	function changeInputAge(event) {
		setAge(event.target.value);
	}

	function addNewUser() {
		setUsers([...users, { id: Math.random(), name, age }]);
	}

	return (
		<Container>
			<Image alt="people talking" src={Users} />

			<ContainerForm>
				<H1>Olá!</H1>

				<InputLabel>Nome</InputLabel>
				<Input onChange={changeInputName} placeholder="Nome"></Input>

				<InputLabel>Idade</InputLabel>
				<Input onChange={changeInputAge} placeholder="Idade"></Input>

				<Button onClick={addNewUser}>
					Cadastrar <img alt="arrow" src={Arrow} />
				</Button>

				<ul>
					{users.map((user) => (
						<User key={user.id}>
							<p>{user.name}</p>
							<p>{user.age}</p>
							<button>
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
