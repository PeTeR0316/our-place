import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.header`
    .headerContainer {
        .title {
            font-size: 2rem;
            padding-left: 0.63rem;
        }
    }
`;

const Header = () => {
    return (
        <HeaderStyle>
            <div className="headerContainer">
                <h1 className="title">Our Place</h1>
            </div>
        </HeaderStyle>
    )
};

export default Header;