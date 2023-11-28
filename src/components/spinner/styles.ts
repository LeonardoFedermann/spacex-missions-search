import styled from "styled-components";

import { colors } from "../../shared/styles";

const { COLOR_WHITE, COLOR_BLACK } = colors;

export const SpinnerWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const SpinnerElement = styled.div`
	border: 10px solid ${COLOR_WHITE};
	border-radius: 50%;
	border-top-color: ${COLOR_BLACK};
	width: 40px;
	height: 40px;
	margin-top: 60px;
	@keyframes rotation {
		to {
			transform: rotate(360deg);
		}
	}
	animation: rotation 2s linear infinite;
`;
