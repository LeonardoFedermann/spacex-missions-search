import { ReactElement, useEffect, useState, useMemo } from 'react'

import { useForm, useDisplayedMissions } from '../../shared/hooks'
import SearchField from '../../components/search-field'
import MissionsTable from '../../components/missions-table'
import { SearchPageWrapper } from './styles'
import { Mission, requestPossibleStatuses, PossibleDisplayedSearchContents } from "../../shared/types"
import { fetchMissions } from '../../shared/utils'

const SearchPage = (): ReactElement => {
    const { form, handleFormChange, resetForm } = useForm({ search: "" })
    const [fetchedMissions, setFetchedMissions] = useState<Mission[]>([])
    const [requestStatus, setRequestStatus] = useState<requestPossibleStatuses>(
        requestPossibleStatuses.LOADING
    )
    const displayedMissions: Mission[] = useDisplayedMissions(fetchedMissions, form.search)

    const possibleDisplayedSearchContents: PossibleDisplayedSearchContents = {
        [requestPossibleStatuses.SUCCESS]: <MissionsTable missions={displayedMissions} />,
        [requestPossibleStatuses.LOADING]: <div>Carregando...</div>,
        [requestPossibleStatuses.ERROR]: <div>DEU RUUUUUIM</div>
    }

    useEffect(() => {
        fetchMissions().then(fetchedMissions => {
            setFetchedMissions(fetchedMissions)
            setRequestStatus(requestPossibleStatuses.SUCCESS)
        }).catch(() => {
            setRequestStatus(requestPossibleStatuses.ERROR)
        })
    }, [])

    return (
        <SearchPageWrapper>
            <>
                <SearchField
                    search={form.search}
                    handleFormChange={handleFormChange}
                    resetForm={resetForm}
                />
                {possibleDisplayedSearchContents[requestStatus]}
            </>
        </SearchPageWrapper>
    )
}

export default SearchPage