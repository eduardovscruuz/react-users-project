import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import Users from "../../assets/user-cons.png";
import Arrow from "../../assets/arrow.png";
import H1 from "../../components/Title";
import ContainerForm from "../../components/ContainerForm";
import Button from "../../components/Button";

import { Container, Image, InputLabel, Input } from "./styles";

const App = () => {
	const [users, setUsers] = useState([]);
	const navigate = useNavigate();
	const inputName = useRef();
	const inputAge = useRef();

	async function addNewUser() {
		if (inputAge.current.value === "" || inputName.current.value === "") {
			console.log("ERRO");
		} else {
			const { data: newUser } = await Axios.post(
				"http://localhost:3001/users",
				{
					name: inputName.current.value,
					age: inputAge.current.value,
				}
			);

			setUsers([...users, newUser]);

			navigate("./usuarios");
		}
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
