import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import SignInHeader from "../../components/sign-in/sign-in-header";
import SignInForm from "../../components/sign-in/sign-in-form";

const SignInStyle = styled.div`
    width: 100%;

    .signInContainer {
        width: 100%;
        padding: 0.63rem;

        .signBtn {
            display:inline-block;
            margin-top: 50px;
            width: 100%;
            text-align: center;
            font-size: 1rem;
        }
    }
`;

const SignIn = () => {
    return (
        <SignInStyle>
            <div className="signInContainer">
                <SignInHeader />
                <SignInForm />

                
                <Link to="/signup" className="signBtn">회원가입</Link>
            </div>
        </SignInStyle>
    )
};

export default SignIn;