import { ReactElement, useState, useEffect, useReducer } from "react";
import { useParams } from "react-router";

import MissionInfo from "../../components/mission-info";
import { Mission, RequestPossibleStatuses } from "../../shared/types";
import { withRequestStatusHandling } from '../../shared/hocs'
import { ProfilePageWrapper, NavigateLink } from "./styles"

import {
    fetchMission,
    handleFetchMissionError,
    handleFetchMissionSuccess
} from "../../shared/utils";
import {
    MISSION_NOT_FOUND_ERROR_MESSAGE,
    REQUEST_ERROR_MESSAGE
} from "../../shared/constants";

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

    const contentWithRequestStatusHandling = withRequestStatusHandling(
        () => <MissionInfo mission={mission} />,
        missionNotFound ? MISSION_NOT_FOUND_ERROR_MESSAGE : REQUEST_ERROR_MESSAGE,
        requestStatus
    )

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
                Search Page
            </NavigateLink>
            {contentWithRequestStatusHandling}
        </ProfilePageWrapper>
    )
}

export default ProfilePage