import { ReactElement, useState, useEffect, useReducer } from "react";
import { useParams } from "react-router";

import MissionInfo from "../../components/mission-info";
import Spinner from "../../components/spinner";
import ErrorMessage from '../../components/error_message'
import { ProfilePageWrapper, NavigateLink, GoBackIcon } from "./styles"

import {
    fetchMission,
    handleFetchMissionError,
    handleFetchMissionSuccess
} from "../../shared/utils";
import {
    MISSION_NOT_FOUND_ERROR_MESSAGE,
    REQUEST_ERROR_MESSAGE
} from "../../shared/constants";
import {
    Mission,
    RequestPossibleStatuses,
    PossibleDisplayedContents
} from "../../shared/types";

const ProfilePage = (): ReactElement => {
    const { id } = useParams()
    const [mission, setMission] = useState<Mission>({} as Mission)
    const [requestStatus, setRequestStatus] = useState<RequestPossibleStatuses>(
        RequestPossibleStatuses.LOADING
    )
    const [missionNotFound, toggleMissionNotFound] = useReducer(
        missionNotFound => !missionNotFound,
        false
    )

    const possibleDisplayedContents: PossibleDisplayedContents = {
        [RequestPossibleStatuses.SUCCESS]: <MissionInfo mission={mission} />,
        [RequestPossibleStatuses.LOADING]: <Spinner />,
        [RequestPossibleStatuses.ERROR]: (
            <ErrorMessage
                message={(
                    missionNotFound ?
                        MISSION_NOT_FOUND_ERROR_MESSAGE :
                        REQUEST_ERROR_MESSAGE
                )}
            />
        )
    }

    useEffect(() => {
        fetchMission(id ?? '').then(fetchedMission => {
            handleFetchMissionSuccess({
                fetchedMission,
                setMission,
                setRequestStatus
            })
        }).catch(error => {
            handleFetchMissionError({
                errorMessage: error.message,
                toggleMissionNotFound,
                setRequestStatus
            })
        })
    }, [id])

    return (
        <ProfilePageWrapper>
            <NavigateLink to="/">
                <GoBackIcon>&#x25c0;</GoBackIcon> Search Page
            </NavigateLink>
            {possibleDisplayedContents[requestStatus]}
        </ProfilePageWrapper>
    )
}

export default ProfilePage