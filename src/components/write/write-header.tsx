import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const WriteHeaderStyle = styled.div`
    width: 100%;

    .writeHeaderContainer {
        width: 100%
        padding-left: 0.63rem;

        .pageTitle {
            padding: 0px 0.5rem;
        }
    }
`

const WriteHeader = () => {
    const navigate = useNavigate();

    return (
        <WriteHeaderStyle>
            <div className="writeHeaderContainer">
                <span onClick={()=>navigate(-1)}>뒤로</span>
                <span className="pageTitle">장소 등록하기</span>
            </div>
        </WriteHeaderStyle>
    )
};

export default WriteHeader