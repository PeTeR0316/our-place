import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const SignUpHeaderStyle = styled.div`
    width: 100%;
    padding : 0.6rem 0px;

    .signUpHeaderContainer {
        width: 100%
        padding-left: 0.63rem;

        .pageTitle {
            padding: 0px 0.5rem;
            font-size: 1.1rem;
        }
    }
`;

const SignUpHeader = () => {
    const navigate = useNavigate();

    return (
        <SignUpHeaderStyle>
            <div className="signUpHeaderContainer">
                <Link to="/login">{`<-`}</Link>
                <span className="pageTitle">회원가입</span>
            </div>
        </SignUpHeaderStyle>
    )
};

export default SignUpHeader;