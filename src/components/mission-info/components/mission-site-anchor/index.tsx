import { ReactElement } from "react";

import { MissionSiteAnchorWrapper, MissionSiteAnchorLogo } from "./styles"

type MissionSiteAnchorProps = {
    href: string;
    logo: string;
    site: string;
}

const MissionSiteAnchor = ({
    href,
    logo,
    site
}: MissionSiteAnchorProps): ReactElement => (
    <MissionSiteAnchorWrapper
        aria-label={`Mission ${site}`}
        href={href}
        target="_blank"
    >
        <MissionSiteAnchorLogo
            src={logo}
            alt={site}
        />
    </MissionSiteAnchorWrapper>
)

export default MissionSiteAnchor