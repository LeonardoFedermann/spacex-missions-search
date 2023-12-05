import { ReactElement } from "react";

export type GenericObject<KeysType> = {
	[key: string]: KeysType;
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

export enum MissionActionTypes {
	ADD_FAVORITE_MISSION = "ADD_FAVORITE_MISSION",
	REMOVE_FAVORITE_MISSION = "REMOVE_FAVORITE_MISSION",
}

export type MissionActionPayload = {
	missionId: string;
};

export type MissionAction = {
	type: string;
	payload: MissionActionPayload;
};
