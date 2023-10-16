import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router";

import { fetchMission } from "../../shared/utils";
import MissionInfo from "../../components/mission-info";
import { ProfilePageWrapper, NavigateLink } from "./styles"

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

    const possibleDisplayedContents: PossibleDisplayedContents = {
        [RequestPossibleStatuses.SUCCESS]: <MissionInfo mission={mission} />,
        [RequestPossibleStatuses.LOADING]: <div>Carregando...</div>,
        [RequestPossibleStatuses.ERROR]: <div>DEU RUUUUUIM</div>
    }

    useEffect(() => {
        fetchMission(id ?? '').then(fetchedMission => {
            if (fetchedMission) {
                setMission(fetchedMission)
                setRequestStatus(RequestPossibleStatuses.SUCCESS)
            } else {
                setRequestStatus(RequestPossibleStatuses.ERROR)
            }
        }).catch(() => {
            setRequestStatus(RequestPossibleStatuses.ERROR)
        })
    }, [id])

    return (
        <ProfilePageWrapper>
            <NavigateLink to="/">
                Search Page
            </NavigateLink>
            {possibleDisplayedContents[requestStatus]}
        </ProfilePageWrapper>
    )
}

export default ProfilePage