import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const SignInHeaderStyle = styled.div`
    width: 100%;
    padding : 0.6rem 0px;

    .signInHeaderContainer {
        width: 100%;
        padding-left: 0.63rem;

        .pageTitle {
            padding: 0px 0.5rem;
            font-size: 1.1rem;
        }
    }
`;

const SignInHeader = () => {
    const navigate = useNavigate();
    return (
        <SignInHeaderStyle>
            <div className="signInHeaderContainer">
                <span onClick={()=>navigate(-1)}>{`<-`}</span>
                <span className="pageTitle">로그인</span>
            </div>
        </SignInHeaderStyle>
    )
};

export default SignInHeader;