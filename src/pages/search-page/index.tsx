import { ReactElement, useState, useEffect } from 'react'

import { useForm, useDisplayedMissions } from '../../shared/hooks'
import SearchField from '../../components/search-field'
import MissionsTable from '../../components/missions-table'
import { SearchPageWrapper } from './styles'
import { fetchMissions } from '../../shared/utils'
import { REQUEST_ERROR_MESSAGE } from "../../shared/constants";
import { withRequestStatusHandling } from '../../shared/hocs'
import { Mission, RequestPossibleStatuses } from "../../shared/types"

const SearchPage = (): ReactElement => {
    const { form, handleFormChange } = useForm({ search: "" })
    const [fetchedMissions, setFetchedMissions] = useState<Mission[]>([])
    const [requestStatus, setRequestStatus] = useState<RequestPossibleStatuses>(
        RequestPossibleStatuses.LOADING
    )
    const displayedMissions: Mission[] = useDisplayedMissions(fetchedMissions, form.search)
    const contentWithRequestStatusHandling = withRequestStatusHandling(
        () => (
            <>
                <SearchField
                    search={form.search}
                    handleFormChange={handleFormChange}
                />
                <MissionsTable missions={displayedMissions} />
            </>
        ),
        REQUEST_ERROR_MESSAGE,
        requestStatus
    )

    useEffect(() => {
        fetchMissions()
            .then(fetchedMissions => {
                setFetchedMissions(fetchedMissions);
                setRequestStatus(RequestPossibleStatuses.SUCCESS);
            })
            .catch(() => {
                setRequestStatus(RequestPossibleStatuses.ERROR);
            });
    }, []);

    return (
        <SearchPageWrapper>
            {contentWithRequestStatusHandling}
        </SearchPageWrapper>
    )
}

export default SearchPage