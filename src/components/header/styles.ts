import styled from "styled-components";

import { HEADER_BACKGROUND_COLOR } from "../../styles/colors";

export const HeaderWrapper = styled.header`
	height: 120px;
	background-color: ${HEADER_BACKGROUND_COLOR};
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 100px;
`;

export const SpaceXLogo = styled.img`
	height: 80%;
	@media (max-width: 400px) {
		display: none;
	}
`;

export const MainTitle = styled.h1`
	font-size: 30px;
	word-break: break-word;
`;
