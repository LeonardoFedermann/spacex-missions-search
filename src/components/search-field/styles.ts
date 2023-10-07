import { styled } from "styled-components";

export const SearchFieldWrapper = styled.fieldset`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 10px;
	border: none;
`;

export const SearchFieldLabel = styled.label`
	font-size: 20px;
`;

export const SearchFieldInput = styled.input`
	width: 350px;
	height: 20px;
	font-size: 20px;
	border-radius: 10px;
	padding: 5px;
`;
