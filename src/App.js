import React from "react";
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
	return (<Container>
		<Image />
	</Container>)(
		<ContainerForm>
			<H1>Olá</H1>

			<InputLabel>Nome</InputLabel>
			<Input placeholder="Nome"></Input>

			<InputLabel>Idade</InputLabel>
			<Input placeholder="Idade"></Input>

			<Button>Cadastrar</Button>
		</ContainerForm>
	);
};

export default App;
