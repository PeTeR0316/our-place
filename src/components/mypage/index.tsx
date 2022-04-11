import React, { useEffect, useState } from "react";
import styled from "styled-components";

const MypageComponentStyle = styled.div`
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
            <p>
                <span>회원이름 : </span>
                <span>{userName}</span>
            </p>

            <button type="button"
                onClick={logout}
            >
                로그아웃
            </button>
        </MypageComponentStyle>
    )
}

export default MypageComponent;