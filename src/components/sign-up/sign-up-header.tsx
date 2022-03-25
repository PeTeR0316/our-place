import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SignUpHeaderStyle = styled.div`
    width: 100%;

    .signUpHeaderContainer {
        width: 100%
        padding-left: 0.63rem;
    }
`;

const SignUpHeader = () => {
    return (
        <SignUpHeaderStyle>
            <div className="signUpHeaderContainer">
                <Link to="/login">뒤로</Link>
                <span>회원가입</span>
            </div>
        </SignUpHeaderStyle>
    )
};

export default SignUpHeader;