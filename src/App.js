import React from "react";
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
	const users = [
		{ id: Math.random(), name: "Eduardo", age: "22" },
		{ id: Math.random(), name: "Gabriely", age: "24" },
	];
	function addNewUser() {
		users.push({ id: Math.random(), name: "Eduardo", age: "22" });
	}
	return (
		<Container>
			<Image alt="people talking" src={Users} />

			<ContainerForm>
				<H1>Olá!</H1>

				<InputLabel>Nome</InputLabel>
				<Input placeholder="Nome"></Input>

				<InputLabel>Idade</InputLabel>
				<Input placeholder="Idade"></Input>

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
