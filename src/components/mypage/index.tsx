import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from "../header";
import UserInfo from "./user-info";
import MypageMenu from "./mypage-menu";
import MypageReview from "./review";

const MypageComponentStyle = styled.div`
    padding: 0.63rem;

    .logoutBtn {
        width: 100%;
        height: 3rem;
        text-align: center;
        border: none;
        border-radius: 0.4rem;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        padding: 0;
    }
`;

const MypageComponent = () => {
    const [userName, setUserName] = useState<string | null>(localStorage.getItem('ourplace_name'))

    useEffect(() => {
        if(!localStorage.getItem('ourplace_name')) {
            alert("로그인이 필요합니다.");
            window.location.href = '/login';
        }
    },[])

    const logout = async () => {
        await localStorage.removeItem('ourplace_name');
        window.location.href = '/';
    }

    return (
        <MypageComponentStyle>
            <Header />
            <UserInfo />
            <MypageMenu />

            <button type="button"
                className="logoutBtn"
                onClick={logout}
            >
                로그아웃
            </button>
        </MypageComponentStyle>
    )
}

export default MypageComponent;