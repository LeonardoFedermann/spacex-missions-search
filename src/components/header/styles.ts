import styled from "styled-components";

import { colors, breakpoints } from "../../shared/styles";

const { TABLET_BREAKPOINT, MOBILE_BREAKPOINT } = breakpoints;

export const HeaderWrapper = styled.header`
	height: 120px;
	// height: 10vh;
	background-color: ${colors.HEADER_BACKGROUND_COLOR};
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	@media (max-width: ${MOBILE_BREAKPOINT}px) {
		padding: 0;
	}
`;

export const SpaceXLogo = styled.img`
	height: 80%;
	@media (max-width: ${TABLET_BREAKPOINT}px) {
		height: 60%;
	}
`;

export const MainTitle = styled.h1`
	font-size: 30px;
	@media (max-width: ${TABLET_BREAKPOINT}px) {
		font-size: 25px;
	}
	@media (max-width: ${MOBILE_BREAKPOINT}px) {
		display: none;
	}
`;
