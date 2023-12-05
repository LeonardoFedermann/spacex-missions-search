import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../../../shared/styles";
import { missionCellStandardStyle } from "../../styles";

const { COLOR_WHITE } = colors;

export const NavigateLink = styled(Link)`
	color: ${COLOR_WHITE};
`;

export const ExternalLink = styled.a`
	color: ${COLOR_WHITE};
`;

export const MissionTableCell = styled.th`
	${missionCellStandardStyle}
	text-align: left;
	border-right: 1px solid ${COLOR_WHITE};
`;

export const MissionTableLastRightCell = styled.th`
	${missionCellStandardStyle}
	border-right: none;
`;

export const FavoriteButton = styled.button`
	background: none;
	color: ${colors.COLOR_WHITE};
	border: none;
	font-weight: 700;
	font-size: 20px;
	cursor: pointer;
`;

