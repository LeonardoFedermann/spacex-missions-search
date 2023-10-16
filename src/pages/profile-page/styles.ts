import styled from "styled-components";
import { Link } from "react-router-dom";

import { COLOR_WHITE } from "../../styles/colors";

export const ProfilePageWrapper = styled.section`
	padding: 20px 100px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 15px;
`;

export const NavigateLink = styled(Link)`
	color: ${COLOR_WHITE};
    display: flex;
`;
