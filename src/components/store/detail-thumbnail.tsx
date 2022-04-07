import React from "react";
import styled from "styled-components";

const DetailThumbnailStyle = styled.div`
    text-align: center;
    
    .detailThumbnailContainer {
        width: 100%;
        max-width: 600px;
        display: inline-block;

        .storeThumbnail {
            width: 100%;
            height: 30rem;
            object-fit: cover;
        }
    }
`;

interface StoreImg {
    imgName: string,
}

const DetailThumbnail = ({imgName}: StoreImg) => {
    const reviewUrl = "https://our-place.s3.ap-northeast-2.amazonaws.com/write-img/";

    return (
        <DetailThumbnailStyle>
            <div className="detailThumbnailContainer">
                <img src={`${reviewUrl}${imgName}`} 
                    className="storeThumbnail"
                    alt="thumbnail" 
                />
            </div>
        </DetailThumbnailStyle>
    )
};

export default DetailThumbnail;