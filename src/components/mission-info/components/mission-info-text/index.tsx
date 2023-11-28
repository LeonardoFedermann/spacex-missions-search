import { ReactElement } from 'react'

import { MissionInfoTextWrapper } from "./styles"

type MissionInfoContentProps = {
    title: string;
    content: string | ReactElement;
}

const MissionInfoContent = ({
    title,
    content
}: MissionInfoContentProps): ReactElement => (
    <MissionInfoTextWrapper>
        <strong>{title}: </strong> {content}
    </MissionInfoTextWrapper>
)

export default MissionInfoContent