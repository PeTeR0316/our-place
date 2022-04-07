import React from "react";
import styled from "styled-components";

import WriteHeader from "../../components/write/write-header";
import WriteForm from "../../components/write/write-form";

const WriteStyle = styled.div`
    width: 100%;
    padding: 0.63rem;
`;

const Write = () => {
    return (
        <WriteStyle>
            <WriteHeader />
            <WriteForm />
        </WriteStyle>
    )
};

export default Write;