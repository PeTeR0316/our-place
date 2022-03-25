import React from 'react';
import styled from 'styled-components';

import Header from '../../components/header';
import Nav from '../../components/nav';
import Search from '../../components/search';
import BottomMenu from '../../components/bottom-menu';
import ItemList from '../../components/item-list';

const MainStyle = styled.div`
    width: 100%;
`

const Main = () => {
    return (
        <MainStyle>
            <Header />
            <Nav />
            <Search />
            <ItemList />
            <BottomMenu />
        </MainStyle>
    )
};

export default Main;