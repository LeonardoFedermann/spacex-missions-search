import { ReactElement } from "react";

import {
    NavigateLink,
    ExternalLink,
    MissionTableLastRightCell,
    MissionTableCell,
    FavoriteButton
} from './styles'

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
        <MissionTableCell>
            <ExternalLink
                target="_blank"
                href={website}
            >
                {website}
            </ExternalLink>
        </MissionTableCell>
        <MissionTableLastRightCell>
            <FavoriteButton>&#9734;</FavoriteButton>
            {/* ÍCONE PARA ESTRELHA CHEIA: &#9733; */}
        </MissionTableLastRightCell>
    </tr>
)

export default TableContentLine