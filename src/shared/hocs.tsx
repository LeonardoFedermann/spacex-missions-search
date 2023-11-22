import { ReactElement } from "react";

import Spinner from "../components/spinner";
import ErrorMessage from '../components/error_message'
import { RequestPossibleStatuses, PossibleDisplayedContents } from "./types";

export const withRequestStatusHandling = (
    PageMainContent: React.ComponentType<{}>,
    errorMessage: string,
    requestStatus: RequestPossibleStatuses
): ReactElement => {
    const PageWithRequestStatusHandling = (): ReactElement => {
        const possibleDisplayedContents: PossibleDisplayedContents = {
            [RequestPossibleStatuses.SUCCESS]: <PageMainContent />,
            [RequestPossibleStatuses.LOADING]: <Spinner />,
            [RequestPossibleStatuses.ERROR]: <ErrorMessage message={errorMessage} />
        }

        return possibleDisplayedContents[requestStatus];
    }

    return <PageWithRequestStatusHandling />
}