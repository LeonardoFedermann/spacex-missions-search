import { ReactElement, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from '../../../../redux/store'
import { addMission, removeMission } from '../../../../redux/slices/favorite-missions-slice'
import { useIsMissionFavorite } from "../../../../shared/hooks";

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
}: TableContentLineProps): ReactElement => {
    const favoriteMissionsIds = useSelector((state: RootState) => state.favoriteMissions.ids)
    const dispatch = useDispatch()
    const isMissionFavorite: boolean = useIsMissionFavorite(id, favoriteMissionsIds)

    const addMissionToFavorites = (id: string): void => {
        dispatch(addMission(id))
    }

    const removeMissionFromFavorites = (id: string): void => {
        dispatch(removeMission(id))
    }

    return (
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
                {isMissionFavorite ? (
                    <FavoriteButton
                        onClick={() => removeMissionFromFavorites(id)}
                    >
                        &#9733;
                    </FavoriteButton>
                ) : (
                    <FavoriteButton
                        onClick={() => addMissionToFavorites(id)}
                    >
                        &#9734;
                    </FavoriteButton>
                )}
            </MissionTableLastRightCell>
        </tr>
    )
}

export default TableContentLine