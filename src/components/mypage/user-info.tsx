import React, { useEffect, useState } from "react";
import styled from "styled-components";

const UserInfoStyle = styled.div`
    width: 100%;

    .userInfoContainer {
        width: 100%;
        padding-top: 1rem;

        .userImg {
            width: 5rem;
            height: 5rem;
            background-color: #000000;
            border-radius: 5rem;
            position: relative;
            left: 50%;
            transform: translateX(-50%)
        }

        .userName {
            text-align: center;
            padding: 1rem 0;
        }
    }
`;

const UserInfo = () => {
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
        <UserInfoStyle>
            <div className="userInfoContainer">
                <div className="userImg"></div>
                <p className="userName">{userName}</p>
            </div>
        </UserInfoStyle>
    )
};

export default UserInfo;