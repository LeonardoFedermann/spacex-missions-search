import { Mission, GenericObject } from "./types";
import { MISSION_DESSERIALIZED_PROPERTIES } from "./constants";
import { BASE_URL } from "../config";

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
