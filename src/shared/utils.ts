import { Mission, GenericObject, RequestPossibleStatuses } from "./types";
import { BASE_URL } from "../config";
import Spinner from "../components/spinner";
import ErrorMessage from "../components/error_message";

import {
	MISSION_DESSERIALIZED_PROPERTIES,
	MISSION_NOT_FOUND_ERROR_MESSAGE,
} from "./constants";
import { ReactElement } from "react";

const desserializeMission = (mission: GenericObject): Mission =>
	Object.keys(mission).reduce(
		(desserializedMission, missionProperty) => ({
			...desserializedMission,
			[MISSION_DESSERIALIZED_PROPERTIES[missionProperty]]:
				mission[missionProperty],
		}),
		{} as Mission
	);

export const fetchMissions = async (): Promise<Mission[]> =>
	await fetch(BASE_URL).then((response) =>
		response
			.json()
			.then((missions: GenericObject[]) =>
				missions.map((mission) => desserializeMission(mission))
			)
	);

export const fetchMission = async (id: string): Promise<Mission | void> =>
	await fetch(`${BASE_URL}/${id}`).then((response) =>
		response.json().then((mission) => desserializeMission(mission))
	);

export const convertListToPlainText = (list: (string | number)[]): string =>
	list.join(", ");

export const handleFetchMissionSuccess = ({
	fetchedMission,
	setMission,
	setRequestStatus,
}: GenericObject): void => {
	if (!fetchedMission?.name) {
		throw new Error(MISSION_NOT_FOUND_ERROR_MESSAGE);
	}

	if (fetchedMission) {
		setMission(fetchedMission);
		setRequestStatus(RequestPossibleStatuses.SUCCESS);
	} else {
		setRequestStatus(RequestPossibleStatuses.ERROR);
	}
};

export const handleFetchMissionError = ({
	errorMessage,
	toggleMissionNotFound,
	setRequestStatus,
}: GenericObject): void => {
	if (errorMessage === MISSION_NOT_FOUND_ERROR_MESSAGE) {
		toggleMissionNotFound();
	}

	setRequestStatus(RequestPossibleStatuses.ERROR);
};

