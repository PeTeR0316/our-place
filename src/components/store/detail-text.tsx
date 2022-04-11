import React from "react";
import styled from "styled-components";

const DetailTextStyle = styled.div`
    text-align: center;

    .detailTextContainer {
        width: 100%;
        max-width: 600px;
        display: inline-block;
        text-align: left;

        .detailInfoArea {
            border-bottom: 1px solid #cccccc;

            .detailInfoList {
                margin: 0.5rem;
            }
        }

        .reviewArea {
            padding: 0.5rem;
            word-break: keep-all;
        }
    }
`;

interface StoreInfo {
    name?: string,
    subway?: string,
    keyword?: string,
    placeInfo?: string,
    review?: string
}

const DetailText = ({name, subway, keyword, placeInfo, review}: StoreInfo) => {
    return (
        <DetailTextStyle>
            <div className="detailTextContainer">
                <div className="detailInfoArea">
                    <p className="detailInfoList">
                        <span>작성자: </span>
                        {name}
                    </p>
                    <p className="detailInfoList">
                        <span>인근 지하철역: </span>
                        {subway}
                    </p>
                    <p className="detailInfoList">
                        <span>이 장소를 잘 표현하는 키워드: </span>
                        {keyword}
                    </p>
                    <p className="detailInfoList">
                        <span>유용한 장소 정보: </span>
                        {placeInfo}
                    </p>
                </div>

                <div className="reviewArea">
                    {review}
                </div>
            </div>
        </DetailTextStyle>
    )
}

export default DetailText