import styled from "styled-components";
import Background from "../../assets/background-img2.png";

export const Container = styled.div`
	background-image: url(${Background});
	background-size: cover;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	margin-bottom: -2%;

	@media only screen and (max-width: 600px) {
   height: 100%;
  }
  
`;


export const Image = styled.img`
	padding: 20px;

	@media only screen and (max-width: 600px) {
   width: 80%;
  }
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

	@media only screen and (max-width: 600px) {
	font-weight: 700;
	font-size: 1em;
	margin-left: 5%;
	padding-bottom: 3%;

  }

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

	@media only screen and (max-width: 600px) {
    padding: 4%;
    border-radius: 0;
	width:80%;
	height: 5%;
	font-weight: 400;
	font-size: 1.1em;
	padding-left: 8%;
	border-radius: 17px;
	margin-bottom: 5%;
	
  }

`;

export const ButtonUsers = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	width: 343px;
	height: 45px;
	margin-top: 12px;
	font-weight: 700;
	font-size: 17px;
	line-height: 28px;
	color: white;
	background: transparent;
	border-radius: 14px;
	border: 1px solid white;
	transition: 0.3s;

	&:hover {
		background: rgba(255, 255, 255, 0.14);
	}

	img {
		width: 15px;
		
	}

	@media only screen and (max-width: 600px) {
	gap: 2%;
	height: 7%;
	margin-top: 4%;
	font-size: 1.2em;
	line-height: 2%;
    padding: 8%;
	width:90%;

  }
`;
