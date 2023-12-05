import { ReactElement, useState, useEffect } from 'react'

import { useForm, useDisplayedMissions } from '../../shared/hooks'
import SearchField from '../../components/search-field'
import MissionsTable from '../../components/missions-table'
import Spinner from '../../components/spinner'
import ErrorMessage from '../../components/error-message'
import { SearchPageWrapper } from './styles'
import { fetchMissions } from '../../shared/utils'
import { REQUEST_ERROR_MESSAGE } from "../../shared/constants";

import {
    Mission,
    RequestPossibleStatuses,
    PossibleDisplayedContents
} from "../../shared/types"

const SearchPage = (): ReactElement => {
    const { form, handleFormChange } = useForm({ search: "" })
    const [fetchedMissions, setFetchedMissions] = useState<Mission[]>([])
    const [requestStatus, setRequestStatus] = useState<RequestPossibleStatuses>(
        RequestPossibleStatuses.LOADING
    )
    const displayedMissions: Mission[] = useDisplayedMissions(fetchedMissions, form.search)

    const possibleDisplayedSearchContents: PossibleDisplayedContents = {
        [RequestPossibleStatuses.LOADING]: <Spinner />,
        [RequestPossibleStatuses.ERROR]: <ErrorMessage message={REQUEST_ERROR_MESSAGE} />,
        [RequestPossibleStatuses.SUCCESS]: (
            <>
                <SearchField
                    search={form.search}
                    handleFormChange={handleFormChange}
                />
                <MissionsTable missions={displayedMissions} />
            </>
        ),
    }

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
            {possibleDisplayedSearchContents[requestStatus]}
        </SearchPageWrapper>
    )
}

export default SearchPage