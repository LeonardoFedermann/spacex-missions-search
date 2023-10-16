import { ReactElement } from 'react'

import { MissionInfoTextWrapper } from "./styles"

type MissionInfoTextProps = {
    title: string;
    text: string;
}

const MissionInfoText = ({
    title,
    text
}: MissionInfoTextProps): ReactElement => (
    <MissionInfoTextWrapper>
        <strong>{title}: </strong> {text}
    </MissionInfoTextWrapper>
)

export default MissionInfoText