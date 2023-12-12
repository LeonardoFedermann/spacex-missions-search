import { ReactElement } from "react";
import { useSelector, useDispatch } from "react-redux";

import MissionInfoText from "./components/mission-info-text";
import MissionSiteAnchor from "./components/mission-site-anchor";
import { convertListToPlainText } from "../../shared/utils";
import { Mission } from "../../shared/types";
import wikipediaLogo from "../../images/wikipedia-logo.png"
import twitterLogo from "../../images/twitter-logo.png"
import { RootState } from "../../redux/store";
import { addMission, removeMission } from "../../redux/slices/favorite-missions-slice";
import { useIsMissionFavorite } from "../../shared/hooks";

import {
    MissionTitle,
    MissionInfoWrapper,
    MissionSitesAnchorsWrapper,
    MissionWebsiteLink,
    FavoriteButton
} from "./styles"

type MissionInfoProps = {
    mission: Mission
}

const MissionInfo = ({ mission }: MissionInfoProps): ReactElement => {
    const { ids: favoriteMissionsIds } = useSelector((state: RootState) => state.favoriteMissions)
    const dispatch = useDispatch()
    const isMissionFavorite: boolean = useIsMissionFavorite(mission.id, favoriteMissionsIds)

    const addMissionToFavorites = (id: string): void => {
        dispatch(addMission(id))
    }

    const removeMissionFromFavorites = (id: string): void => {
        dispatch(removeMission(id))
    }

    return (
        <>
            <MissionTitle>
                {mission?.name ?? ''}
                {isMissionFavorite ? (
                    <FavoriteButton
                        onClick={() => removeMissionFromFavorites(mission.id)}
                    >
                        &#9733;
                    </FavoriteButton>
                ) : (
                    <FavoriteButton
                        onClick={() => addMissionToFavorites(mission.id)}
                    >
                        &#9734;
                    </FavoriteButton>
                )}
            </MissionTitle>
            <MissionInfoWrapper>
                <MissionInfoText title="Mission ID" content={mission?.id ?? ''} />
                <MissionInfoText
                    title="Manufacturers"
                    content={convertListToPlainText(mission?.manufacturers ?? [])}
                />
                <MissionInfoText
                    title="Payload IDs"
                    content={convertListToPlainText(mission?.payloadIds ?? [])}
                />
                <MissionInfoText title="Website" content={(
                    <MissionWebsiteLink href={mission?.website ? mission?.website : "#"}>
                        {mission?.website ?? ''}
                    </MissionWebsiteLink>
                )} />
                <MissionInfoText title="Description" content={mission?.description ?? ''} />
                <MissionSitesAnchorsWrapper>
                    <MissionSiteAnchor
                        site="Wikipedia"
                        href={mission?.wikipedia ?? ''}
                        logo={wikipediaLogo}
                    />
                    <MissionSiteAnchor
                        site="Twitter"
                        href={mission?.twitter ?? ''}
                        logo={twitterLogo}
                    />
                </MissionSitesAnchorsWrapper>
            </MissionInfoWrapper>
        </>
    )
}

export default MissionInfo