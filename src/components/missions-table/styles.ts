import styled from "styled-components";

import { COLOR_WHITE } from "../../styles/colors";
import { TABLE_CELL_WIDTH, TABLE_CELL_HEIGHT } from "../../shared/constants";
import { MissionTableCellProps } from "../../shared/types";

export const missionCellStandardStyle: string = `
    width: ${TABLE_CELL_WIDTH}px;
	height: ${TABLE_CELL_HEIGHT}px;
    padding: 5px;
`;

export const MissionsTableWrapper = styled.table`
	border: 1px solid ${COLOR_WHITE};
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
