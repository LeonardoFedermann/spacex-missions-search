import styled from "styled-components";

import { breakpoints } from "../../shared/styles";
import { HEADER_BACKGROUND_IMAGE_URL } from "../../shared/constants";

const { TABLET_BREAKPOINT, MOBILE_BREAKPOINT } = breakpoints;

export const HeaderWrapper = styled.header`
	height: 120px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	background-image: url("${HEADER_BACKGROUND_IMAGE_URL}");
	background-repeat: no-repeat;
	background-size: cover;
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
