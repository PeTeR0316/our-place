import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const WriteHeaderStyle = styled.div`
`

const WriteHeader = () => {
    return (
        <WriteHeaderStyle>
            <Link to="/">뒤로</Link>
            <span>장소 등록하기</span>
        </WriteHeaderStyle>
    )
};

export default WriteHeader