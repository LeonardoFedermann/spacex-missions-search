import { ReactElement } from "react"

import TableContentLine from './components/table-content-line'
import { MissionsTableWrapper, MissionTableTitleCell, NoMatchWithSearchMessage } from './styles'
import { Mission } from "../../shared/types"

import {
    TABLE_TITLE_FAVORITE,
    TABLE_TITLE_NAME,
    TABLE_TITLE_ID,
    TABLE_TITLE_WEBSITE,
    NO_MATCH_WITH_SEARCH_MESSAGE
} from '../../shared/constants'

type MissionsTableProps = {
    missions: Mission[]
}

const MissionsTable = ({ missions }: MissionsTableProps): ReactElement => (
    <>
        {missions.length === 0 ? (
            <NoMatchWithSearchMessage>
                {NO_MATCH_WITH_SEARCH_MESSAGE}
            </NoMatchWithSearchMessage>
        ) : (
            <MissionsTableWrapper>
                <thead>
                    <tr>
                        <MissionTableTitleCell>
                            {TABLE_TITLE_NAME}
                        </MissionTableTitleCell>
                        <MissionTableTitleCell>
                            {TABLE_TITLE_ID}
                        </MissionTableTitleCell>
                        <MissionTableTitleCell isLastRightCell>
                            {TABLE_TITLE_WEBSITE}
                        </MissionTableTitleCell>
                    </tr>
                </thead>
                <tbody>
                    {missions.map((mission, index) => (
                        <TableContentLine
                            key={mission.id}
                            name={mission.name}
                            id={mission.id}
                            website={mission.website}
                        />
                    ))}
                </tbody>
            </MissionsTableWrapper>
        )}
    </>
)

export default MissionsTable