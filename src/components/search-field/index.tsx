import { ChangeEvent, ReactElement } from "react"

import { useForm } from '../../shared/hooks'
import { SEARCH_FIELD_LABEL, SEARCH_FIELD_PLACEHOLDER } from '../../shared/constants'

import {
    SearchFieldInput,
    SearchFieldLabel,
    SearchFieldWrapper
} from './styles'

type SearchFieldProps = {
    search: string;
    handleFormChange: (event: ChangeEvent<HTMLInputElement>) => void;
    resetForm: () => void;
}

const SearchField = ({
    search,
    handleFormChange,
    resetForm
}: SearchFieldProps): ReactElement => (
    <SearchFieldWrapper role="search">
        <SearchFieldLabel>
            {SEARCH_FIELD_LABEL}
        </SearchFieldLabel>
        <SearchFieldInput
            name="search"
            onChange={handleFormChange}
            value={search}
            placeholder={SEARCH_FIELD_PLACEHOLDER}
            id="search-field"
            role="searchbox"
        />
    </SearchFieldWrapper>
)

export default SearchField