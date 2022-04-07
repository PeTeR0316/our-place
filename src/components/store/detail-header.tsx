import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const DetailHeaderStyled = styled.div`
    width: 100%;
    padding : 0.6rem 0px;

    .detailHeaderContainer {
        padding-left: 0.63rem;

        .storeName {
            margin-left: 10px;
            font-size: 1.2rem;
        }
    }
`;

interface StoreName {
    storeName: string
}

const DetailHeader = ({storeName}: StoreName) => {
    const navigate = useNavigate();

    return (
        <DetailHeaderStyled>
            <div className="detailHeaderContainer">
                <span onClick={()=>navigate(-1)}>{`<-`}</span>
                <span className="storeName">{storeName}</span>
            </div>
        </DetailHeaderStyled>
    )
};

export default DetailHeader