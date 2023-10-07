import styled from "styled-components";

import { COLOR_WHITE } from "../../styles/colors";
import { TABLE_CELL_WIDTH } from "../../shared/constants";

type MissionTableCellProps = {
	isLastRightCell?: boolean;
};

export const SearchPageWrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	margin: 10px;
	gap: 20px;
`;

export const MissionsTable = styled.table`
	border: 1px solid ${COLOR_WHITE};
`;

export const MissionTableCell = styled.th<MissionTableCellProps>`
	width: ${TABLE_CELL_WIDTH}px;
	border-right: ${(props) =>
		props.isLastRightCell ? "none" : `1px solid ${COLOR_WHITE}`};
	border-bottom: 1px solid ${COLOR_WHITE};
`;
