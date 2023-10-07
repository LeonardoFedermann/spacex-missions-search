import { ReactElement } from "react";
import { Link } from "react-router-dom";

import { MissionTableCell } from '../../styles'
import { NavigateLink, ExternalLink } from './styles'

type TableContentLineProps = {
    name: string;
    id: string;
    website: string;
}

const TableContentLine = ({
    name,
    id,
    website,
}: TableContentLineProps): ReactElement => (
    <tr>
        <MissionTableCell>
            <NavigateLink to={`/${id}`}>{name}</NavigateLink>
        </MissionTableCell>
        <MissionTableCell>
            {id}
        </MissionTableCell>
        <MissionTableCell isLastRightCell>
            <ExternalLink
                target="_blank"
                href={website}
            >
                {website}
            </ExternalLink>
        </MissionTableCell>
    </tr>
)

export default TableContentLine