import styled from "styled-components";
import { Link } from "react-router-dom";

import { COLOR_WHITE } from "../../../../styles/colors";
import { MissionTableCellProps } from "../../../../shared/types";
import { missionCellStandardStyle } from "../../styles";

export const NavigateLink = styled(Link)`
	color: ${COLOR_WHITE};
`;

export const ExternalLink = styled.a`
	color: ${COLOR_WHITE};
`;

export const MissionTableCell = styled.th<MissionTableCellProps>`
	${missionCellStandardStyle}
	text-align: left;
	border-right: ${(props) =>
		props.isLastRightCell ? "none" : `1px solid ${COLOR_WHITE}`};
`;
