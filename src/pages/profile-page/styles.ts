import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors, breakpoints } from "../../shared/styles";

const { COLOR_WHITE, LIGHT_GREY } = colors;

export const ProfilePageWrapper = styled.section`
	padding: 20px 100px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 15px;
	@media (max-width: ${breakpoints.MOBILE_BREAKPOINT}px) {
		padding: 20px;
	}
`;

export const NavigateLink = styled(Link)`
	color: ${COLOR_WHITE};
	display: flex;
	text-decoration: none;
	align-items: center;
	&:hover {
		color: ${LIGHT_GREY};
	}
`;

export const GoBackIcon = styled.span`
	margin-right: 10px;
`;
