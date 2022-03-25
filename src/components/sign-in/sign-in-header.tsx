import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SignInHeaderStyle = styled.div`
    width: 100%;

    .signInHeaderContainer {
        width: 100%
        padding-left: 0.63rem;
    }
`;

const SignInHeader = () => {
    return (
        <SignInHeaderStyle>
            <div className="signInHeaderContainer">
                <Link to="/">뒤로</Link>
                <span>로그인</span>
            </div>
        </SignInHeaderStyle>
    )
};

export default SignInHeader;