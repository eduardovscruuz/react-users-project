import styled from "styled-components";
import Background from "../../assets/background-img2.png";

export const Container = styled.div`
	background-image: url(${Background});
	background-size: cover;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
`;
export const Image = styled.img`
	padding: 20px;
`;
export const ContainerForm = styled.div`
	color: white;
	background: linear-gradient(
		157.44deg,
		rgba(255, 255, 255, 0.6) 0.84%,
		rgba(255, 255, 255, 0.6) 0.85%,
		rgba(255, 255, 255, 0.15) 100%
	);
	border-radius: 61px 61px 0px 0px;
	padding: 50px 36px;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
`;
export const H1 = styled.h1`
	font-weight: 700;
	font-size: 34px;
	line-height: 40px;
	text-align: center;
	color: #ffffff;
`;
export const InputLabel = styled.p`
	font-weight: 700;
	font-size: 18px;
	line-height: 22px;
	letter-spacing: -0.408px;
	color: #eeeeee;
	display: flex;
	align-self: flex-start;
	margin-left: 20px;
`;
export const Input = styled.input`
	width: 342px;
	height: 58px;
	font-weight: 400;
	font-size: 24px;
	line-height: 28px;
	color: #ffffff;
	background: rgba(255, 255, 255, 0.25);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border: none;
	outline: none;
	padding-left: 20px;
	border-radius: 17px;
	margin-bottom: 35px;
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
	background: rgba(0, 0, 0, 0.8);
	border-radius: 14px;
	border: none;

	&:hover {
		background: rgba(0, 0, 0, 0.6);
	}
`;
