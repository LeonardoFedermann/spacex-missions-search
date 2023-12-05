import { BASE_URL } from "../config";

import {
	MISSION_DESSERIALIZED_PROPERTIES,
	MISSION_NOT_FOUND_ERROR_MESSAGE,
} from "./constants";
import { 
	Mission, 
	GenericObject, 
	RequestPossibleStatuses
} from "./types";

const desserializeMission = (mission: GenericObject<string | string[]>): Mission =>
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
			.then((missions: GenericObject<string | string[]>[]) =>
				missions.map((mission) => desserializeMission(mission))
			)
	);

export const fetchMission = async (id: string): Promise<Mission | void> =>
	await fetch(`${BASE_URL}/${id}`).then((response) =>
		response.json().then((mission) => desserializeMission(mission))
	);

export const convertListToPlainText = (list: (string | number)[]): string =>
	list.join(", ");
