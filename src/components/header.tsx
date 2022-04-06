import React, { useEffect, useState } from "react";
import styled from "styled-components";

const HeaderStyle = styled.header`
    .headerContainer {
        .title {
            font-size: 2rem;
            padding-left: 0.63rem;
            color: rgb(27, 105, 53);
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
                <h1 className="title">Our Place</h1>
                <span>{userName}</span>
            </div>
        </HeaderStyle>
    )
};

export default Header;