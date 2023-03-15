import styled from "styled-components";

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
	width: 342px;
	height: 74px;
	margin-top: 120px;
	font-weight: 700;
	font-size: 17px;
	line-height: 28px;
	color: white;
	background: ${(props) =>
		props.isBack ? "transparent" : "rgba(0, 0, 0, 0.8)"};
	border-radius: 14px;
	border: ${(props) => (props.isBack ? "1px solid #ffffff" : "none")};
	transition: 0.3s;

	&:hover {
		background: ${(props) =>
			props.isBack ? "rgba(255, 255, 255, 0.14)" : "rgba(0, 0, 0, 0.6)"};
	}

	img {
		transform: ${(props) => props.isBack && "rotateY(180deg)"};
	}
`;
