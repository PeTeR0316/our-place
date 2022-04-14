import React from 'react';
import styled from 'styled-components';

import Header from '../../components/header';
import Nav from '../../components/nav';
import Search from '../../components/search';
import BottomMenu from '../../components/bottom-menu';
import KindReviewList from '../../components/kind';

const KindStyle = styled.div`
    width: 100%;
`

const Kind = () => {
    return (
        <KindStyle>
            <Header />
            <Nav />
            <Search />
            <KindReviewList />
            <BottomMenu />
        </KindStyle>
    )
};

export default Kind;