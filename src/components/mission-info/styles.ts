import styled from "styled-components";

import { colors } from "../../shared/styles";

const { COLOR_WHITE, LIGHT_GREY } = colors;

export const MissionInfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 20px;
	overflow-y: auto;
`;

export const MissionTitle = styled.h2`
	font-size: 30px;
`;

export const MissionSitesAnchorsWrapper = styled.div`
	display: flex;
	align-items: center;
	width: 125px;
	justify-content: space-between;
	margin-top: 10px;
`;

export const MissionWebsiteLink = styled.a`
	color: ${COLOR_WHITE};
	&:hover {
		color: ${LIGHT_GREY};
	}
`;
