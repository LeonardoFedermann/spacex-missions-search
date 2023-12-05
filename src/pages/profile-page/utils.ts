import { Dispatch, SetStateAction } from "react";

import { MISSION_NOT_FOUND_ERROR_MESSAGE } from "../../shared/constants";
import {
	Mission,
	GenericObject,
	RequestPossibleStatuses,
} from "../../shared/types";

type HandleFetchMissionSuccessParams = {
	fetchedMission: Mission | void;
	setMission: Dispatch<SetStateAction<Mission>>;
	setRequestStatus: Dispatch<SetStateAction<RequestPossibleStatuses>>;
};

type HandleFetchMissionErrorParams = {
    errorMessage: string;
	toggleMissionNotFound: Dispatch<SetStateAction<void>>;
	setRequestStatus: Dispatch<SetStateAction<RequestPossibleStatuses>>;
}

export const handleFetchMissionSuccess = ({
	fetchedMission,
	setMission,
	setRequestStatus,
}: HandleFetchMissionSuccessParams): void => {
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
}: HandleFetchMissionErrorParams): void => {
	if (errorMessage === MISSION_NOT_FOUND_ERROR_MESSAGE) {
		toggleMissionNotFound();
	}

	setRequestStatus(RequestPossibleStatuses.ERROR);
};
