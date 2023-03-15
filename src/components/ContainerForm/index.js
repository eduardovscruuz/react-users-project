import React from "react";

import { ContainerForm as Container } from "./styles";

function ContainerForm(props, isBlur) {
	return <Container isBlur={isBlur}>{props.children}</Container>;
}

export default ContainerForm;
