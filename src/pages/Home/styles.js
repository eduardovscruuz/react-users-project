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
