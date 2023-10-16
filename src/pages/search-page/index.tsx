import { ReactElement, useEffect, useState } from 'react'

import { useForm, useDisplayedMissions } from '../../shared/hooks'
import SearchField from '../../components/search-field'
import MissionsTable from '../../components/missions-table'
import { SearchPageWrapper } from './styles'
import { Mission, RequestPossibleStatuses, PossibleDisplayedContents } from "../../shared/types"
import { fetchMissions } from '../../shared/utils'

const SearchPage = (): ReactElement => {
    const { form, handleFormChange } = useForm({ search: "" })
    const [fetchedMissions, setFetchedMissions] = useState<Mission[]>([])
    const [requestStatus, setRequestStatus] = useState<RequestPossibleStatuses>(
        RequestPossibleStatuses.LOADING
    )
    const displayedMissions: Mission[] = useDisplayedMissions(fetchedMissions, form.search)

    const possibleDisplayedSearchContents: PossibleDisplayedContents = {
        [RequestPossibleStatuses.SUCCESS]: <MissionsTable missions={displayedMissions} />,
        [RequestPossibleStatuses.LOADING]: <div>Carregando...</div>,
        [RequestPossibleStatuses.ERROR]: <div>DEU RUUUUUIM</div>
    }

    useEffect(() => {
        fetchMissions().then(fetchedMissions => {
            setFetchedMissions(fetchedMissions)
            setRequestStatus(RequestPossibleStatuses.SUCCESS)
        }).catch(() => {
            setRequestStatus(RequestPossibleStatuses.ERROR)
        })
    }, [])

    return (
        <SearchPageWrapper>
            <>
                <SearchField
                    search={form.search}
                    handleFormChange={handleFormChange}
                />
                {possibleDisplayedSearchContents[requestStatus]}
            </>
        </SearchPageWrapper>
    )
}

export default SearchPage