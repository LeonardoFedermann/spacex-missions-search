import { ReactElement } from "react";

export type GenericObject = {
	[key: string]: any;
};

export type ObjectOfLabels = {
	[key: string]: string;
};

export type Mission = {
	name: string;
	id: string;
	manufacturers: string[];
	payloadIds: string[];
	wikipedia: string;
	website: string;
	twitter: string;
	description: string;
};

export type Error = {
	error: string;
};

export enum requestPossibleStatuses {
	SUCCESS = "success",
	ERROR = "error",
	LOADING = "loading",
}

export type PossibleDisplayedSearchContents = {
	[requestPossibleStatuses.SUCCESS]: ReactElement;
	[requestPossibleStatuses.LOADING]: ReactElement;
	[requestPossibleStatuses.ERROR]: ReactElement;
};

export type MissionTableCellProps = {
	isLastRightCell?: boolean;
};
