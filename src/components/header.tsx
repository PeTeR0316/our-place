import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const HeaderStyle = styled.header`
    .headerContainer {
        display: flex;
        justify-content: space-between;

        .title {
            font-size: 2rem;
            font-weight: 800;
            padding-left: 0.63rem;
            margin: 1rem 0px;
        }

        .userName {
            padding-right: 0.63rem;
            margin: 1rem 0px;
        }
    }
`;

const Header = () => {
    const [userName, setUserName] = useState<string | null>("")

    useEffect(() => {
        setUserName(localStorage.getItem('ourplace_name'));
    },[userName])

    return (
        <HeaderStyle>
            <div className="headerContainer">
                <h1 className="title">
                    <Link to="/">Our Place</Link>
                </h1>
                <span className="userName">{userName}</span>
            </div>
        </HeaderStyle>
    )
};

export default Header;