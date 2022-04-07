import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const WriteHeaderStyle = styled.div`
    width: 100%;
    padding : 0.6rem 0px;

    .writeHeaderContainer {
        width: 100%;

        .pageTitle {
            padding: 0px 0.5rem;
            font-size: 1.1rem;
        }
    }
`

const WriteHeader = () => {
    const navigate = useNavigate();

    return (
        <WriteHeaderStyle>
            <div className="writeHeaderContainer">
                <span onClick={()=>navigate(-1)}>{`<-`}</span>
                <span className="pageTitle">장소 등록하기</span>
            </div>
        </WriteHeaderStyle>
    )
};

export default WriteHeader