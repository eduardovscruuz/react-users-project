import styled from "styled-components";
import Background from "../../assets/background-img1.png";

export const Container = styled.div`
	background-image: url(${Background});
	background-size: cover;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	margin-bottom: -2%;
`;
export const Image = styled.img`
	padding: 20px;
`;

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
	width: 342px;
	height: 74px;
	font-weight: 700;
	font-size: 17px;
	line-height: 28px;
	color: white;
	margin-top: 120px;
	background: transparent;
	border-radius: 14px;
	border: 1px solid white;

	&:hover {
		background: rgba(0, 0, 0, 0.2);
	}

	img {
		transform: rotateY(180deg);
	}
`;

export const User = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 342px;
	height: 58px;
	font-weight: 700;
	font-size: 24px;
	line-height: 28px;
	color: #ffffff;
	background: rgba(255, 255, 255, 0.25);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border: none;
	outline: none;
	padding-left: 20px;
	border-radius: 17px;
	margin-top: 20px;

	button {
		background: none;
		border: none;
		cursor: pointer;
	}
`;
