import React, { useRef, useState } from "react";
import Axios from "axios";
import Users from "../../assets/user-cons.png";
import Arrow from "../../assets/arrow.png";
import {
	Container,
	Image,
	ContainerForm,
	H1,
	InputLabel,
	Input,
	Button,
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
			</ContainerForm>
		</Container>
	);
};

export default App;
