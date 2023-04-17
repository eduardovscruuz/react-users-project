import styled from "styled-components";

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

	${(props) =>
    props.isBlur &&
    `
    backdrop-filter: blur(45px)
  `};

  @media only screen and (max-width: 600px) {
    padding: 6%;
	width:75vw;
	height:100%;
	
  }
`;