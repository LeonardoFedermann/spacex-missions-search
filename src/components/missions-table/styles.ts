import styled from "styled-components";

import { colors } from "../../shared/styles";
import {
	TABLE_CELL_WIDTH_DESKTOP,
	TABLE_CELL_HEIGHT_DESKTOP,
} from "../../shared/constants";
import { MissionTableCellProps } from "../../shared/types";
import { breakpoints } from "../../shared/styles";

const { COLOR_WHITE } = colors;

export const missionCellStandardStyle: string = `
    width: ${TABLE_CELL_WIDTH_DESKTOP}px;
	height: ${TABLE_CELL_HEIGHT_DESKTOP}px;
    padding: 5px;
	word-break: break-word;
`;

export const MissionsTableWrapper = styled.table`
	border: 1px solid ${COLOR_WHITE};
	overflow: auto;
	@media (max-width: ${breakpoints.TABLET_BREAKPOINT}px) {
		margin: 15px;
	}
`;

export const MissionTableTitleCell = styled.th<MissionTableCellProps>`
	${missionCellStandardStyle}
	border-bottom: 1px solid ${COLOR_WHITE};
	border-right: ${(props) =>
		props.isLastRightCell ? "none" : `1px solid ${COLOR_WHITE}`};
`;

export const MissionTableCell = styled.th<MissionTableCellProps>`
	${missionCellStandardStyle}
	text-align: left;
	border-right: ${(props) =>
		props.isLastRightCell ? "none" : `1px solid ${COLOR_WHITE}`};
`;

export const NoMatchWithSearchMessage = styled.p`
	font-size: 20px;
`;
