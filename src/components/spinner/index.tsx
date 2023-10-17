import { ReactElement } from "react";

import { SpinnerElement, SpinnerWrapper } from "./styles"
import { LOADING_ARIA_LABEL } from "../../shared/constants";

const Spinner = (): ReactElement => (
    <SpinnerWrapper>
        <SpinnerElement aria-label={LOADING_ARIA_LABEL} />
    </SpinnerWrapper>
)

export default Spinner