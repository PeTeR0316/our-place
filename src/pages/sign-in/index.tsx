import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import SignInHeader from "../../components/sign-in/sign-in-header";
import SignInForm from "../../components/sign-in/sign-in-form";

const SignInStyle = styled.div`
    width: 100%;

    .signInContainer {
        width: 100%
        padding-left: 0.63rem;
    }
`;

const SignIn = () => {
    return (
        <SignInStyle>
            <div className="signInContainer">
                <SignInHeader />
                <SignInForm />
                <Link to="/signup">회원가입</Link>
            </div>
        </SignInStyle>
    )
};

export default SignIn;