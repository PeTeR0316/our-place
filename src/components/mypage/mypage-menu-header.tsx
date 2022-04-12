import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const MypageMenuHeaderStyle = styled.header`
    width: 100%;
    padding : 0.6rem 0px;

    .mypageMenuHeaderContainer {
        width: 100%;
        padding-left: 0.63rem;

        .pageTitle {
            padding: 0px 0.5rem;
            font-size: 1.1rem;
        }
    }
`;

interface TitleProps {
    title: string
}

const MypageMenuHeader = ({title}:TitleProps) => {
    const navigate = useNavigate();

    return (
        <MypageMenuHeaderStyle>
            <div className="mypageMenuHeaderContainer">
                <span onClick={()=>navigate(-1)}>{`<-`}</span>
                <span className="pageTitle">{title}</span>
            </div>
        </MypageMenuHeaderStyle>
    )
};

export default MypageMenuHeader;