import React from "react";
import styled from "styled-components";

import SignUpHeader from "../../components/sign-up/sign-up-header";
import SignUpForm from "../../components/sign-up/sign-up-form";

const SignUnStyle = styled.div`
`;

const SignUp = () => {
    return (
        <SignUnStyle>
            <SignUpHeader />
            <SignUpForm />
        </SignUnStyle>
    )
};

export default SignUp