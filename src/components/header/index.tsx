import { ReactElement } from 'react'

import { HeaderWrapper, SpaceXLogo, MainTitle } from './styles'
import spaceXLogo from '../../images/spacex-logo.png'
import { MAIN_TITLE } from '../../shared/constants'

const Header = (): ReactElement => {
    return (
        <HeaderWrapper>
            <MainTitle>{MAIN_TITLE}</MainTitle>
            <SpaceXLogo src={spaceXLogo} alt="SpaceX logo" />
        </HeaderWrapper>
    )
}

export default Header
