import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from '../../../components/Header/Header';
import { useTranslation } from 'react-i18next';

const AppMenuOption = styled(Link)`
    margin: 0px 15px;
    text-decoration: none;
    color: #fff;
    &:hover {
        cursor: pointer;
    }
`;

export const AppHeader = () => {
    const { t } = useTranslation();

    const menuOptions = [
        { text: t('menu.about'), destination: 'about' },
        { text: t('menu.experience'), destination: 'experience' },
        { text: t('menu.work'), destination: 'work' },
        { text: t('menu.services'), destination: 'services' },
        { text: t('menu.contact'), destination: 'contact' }
    ];

    return (
        <Header>
            {menuOptions.map((option) => {
                return (
                    <AppMenuOption key={option.text} to={option.destination}>
                        {option.text}
                    </AppMenuOption>
                );
            })}
        </Header>
    );
};
