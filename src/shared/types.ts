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

export enum RequestPossibleStatuses {
	SUCCESS = "success",
	ERROR = "error",
	LOADING = "loading",
}

export type PossibleDisplayedContents = {
	[RequestPossibleStatuses.SUCCESS]: ReactElement;
	[RequestPossibleStatuses.LOADING]: ReactElement;
	[RequestPossibleStatuses.ERROR]: ReactElement;
};

export type MissionTableCellProps = {
	isLastRightCell?: boolean;
};
