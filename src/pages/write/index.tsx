import React from "react";
import styled from "styled-components";

import WriteHeader from "../../components/write/write-header";
import WriteForm from "../../components/write/write-form";
import UploadForm from "../../components/write/upload-form";

const WriteStyle = styled.div`
    width: 100%;
    padding: 0.63rem;
`;

const Write = () => {
    return (
        <WriteStyle>
            <WriteHeader />
            <WriteForm />
            <br /><br />
            {/* <UploadForm /> */}
        </WriteStyle>
    )
};

export default Write;