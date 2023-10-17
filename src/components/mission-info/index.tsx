import { ReactElement } from "react";

import MissionInfoText from "./components/mission-info-text";
import MissionSiteAnchor from "./components/mission-site-anchor";
import { convertListToPlainText } from "../../shared/utils";
import { Mission } from "../../shared/types";
import wikipediaLogo from "../../images/wikipedia-logo.png"
import twitterLogo from "../../images/twitter-logo.png"

import {
    MissionTitle,
    MissionInfoWrapper,
    MissionSitesAnchorsWrapper
} from "./styles"

type MissionInfoProps = {
    mission: Mission
}

const MissionInfo = ({ mission }: MissionInfoProps): ReactElement => (
    <>
        <MissionTitle>{mission?.name ?? ''}</MissionTitle>
        <MissionInfoWrapper>
            <MissionInfoText title="Mission ID" text={mission?.id ?? ''} />
            <MissionInfoText
                title="Manufacturers"
                text={convertListToPlainText(mission?.manufacturers ?? [])}
            />
            <MissionInfoText
                title="Payload IDs"
                text={convertListToPlainText(mission?.payloadIds ?? [])}
            />
            <MissionInfoText title="Website" text={mission?.website ?? ''} />
            <MissionInfoText title="Description" text={mission?.description ?? ''} />
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

export default MissionInfo