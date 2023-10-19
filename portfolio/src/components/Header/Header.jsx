import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import icoLogo from '../../assets/static/icoLogo.png';

const Navigation = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
`;

const MenuOption = styled(Link)`
    margin: 0px 15px;
    text-decoration: none;
    color: #fff;
    &:hover {
        cursor: pointer;
    }
`;

function Header() {
    const { t } = useTranslation();

    const menuOptions = [
        { text: t('menu.about'), destination: 'about' },
        { text: t('menu.experience'), destination: 'experience' },
        { text: t('menu.work'), destination: 'work' },
        { text: t('menu.services'), destination: 'services' },
        { text: t('menu.contact'), destination: 'contact' }
    ];

    return (
        <Navigation>
            <img src={icoLogo} alt="Logo image" />
            <ul>
                {menuOptions.map((option) => {
                    return (
                        <MenuOption key={option.text} to={option.destination}>
                            {option.text}
                        </MenuOption>
                    );
                })}
            </ul>
        </Navigation>
    );
}

export default Header;
