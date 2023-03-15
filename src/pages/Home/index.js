import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import Users from "../../assets/user-cons.png";
import Arrow from "../../assets/arrow.png";
import H1 from "../../components/Title";
import ContainerForm from "../../components/ContainerForm";
import Button from "../../components/Button";

import { Container, Image, InputLabel, Input, ButtonUsers } from "./styles";

const App = () => {
	const [users, setUsers] = useState([]);
	const navigate = useNavigate();
	const inputName = useRef();
	const inputAge = useRef();
	const [message, setMessage] = useState("");
	const [val, setVal] = useState("");

	const handleChange = (event) => {
		const result = event.target.value.replace(/[^a-z]/gi, "");

		setMessage(result);
	};

	async function addNewUser() {
		if (inputAge.current.value === "" || inputName.current.value === "") {
			alert("ERRO");
		} else {
			const { data: newUser } = await Axios.post(
				"http://localhost:3001/users",
				{
					name: inputName.current.value,
					age: inputAge.current.value,
				}
			);

			setUsers([...users, newUser]);
			setVal("");
			setMessage("");
		}
	}
	function nextPage() {
		navigate("./usuarios");
	}

	return (
		<Container>
			<Image alt="people talking" src={Users} />

			<ContainerForm>
				<H1>Olá!</H1>

				<InputLabel>Nome</InputLabel>
				<Input
					id="message"
					name="message"
					type="text"
					value={message}
					onChange={handleChange}
					ref={inputName}
					placeholder="Nome"
				></Input>

				<InputLabel>Idade</InputLabel>
				<Input
					type="text"
					value={val}
					maxLength="2"
					onChange={(e) =>
						setVal(e.target.value.replace(/[^0-9]/g, ""))
					}
					ref={inputAge}
					placeholder="Idade"
				></Input>

				<Button onClick={addNewUser}>Cadastrar</Button>
				<ButtonUsers onClick={nextPage}>
					Usuários <img alt="arrow" src={Arrow} />
				</ButtonUsers>
			</ContainerForm>
		</Container>
	);
};

export default App;
