import { ReactElement } from "react";

import { ErrorMessageWrapper } from "./styles"

type ErrorMessageProps = {
    message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps): ReactElement => (
    <ErrorMessageWrapper aria-label={message}>
        {message}
    </ErrorMessageWrapper>
)

export default ErrorMessage