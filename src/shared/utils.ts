import { Mission, GenericObject } from "./types";
import { MISSION_DESSERIALIZED_PROPERTIES } from "./constants";
import { BASE_URL } from "../config";

const desserializeFetchMissionsResponse = (
	response: GenericObject
): Mission[] =>
	response.json().then((missions: GenericObject[]) =>
		missions.map((mission) =>
			Object.keys(mission).reduce(
				(desserializedMission, missionProperty) => ({
					...desserializedMission,
					[MISSION_DESSERIALIZED_PROPERTIES[missionProperty]]:
						mission[missionProperty],
				}),
				{}
			)
		)
	);

export const fetchMissions = async (): Promise<Mission[]> => {
	// try {
	return await fetch(BASE_URL).then((response) =>
		desserializeFetchMissionsResponse(response)
	);
	// } catch (error: any) {
	// 	return { error: error.message };
	// }
};
