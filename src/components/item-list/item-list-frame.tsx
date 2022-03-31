import React from "react";
import styled from "styled-components";

const ItemListFrameStyle = styled.div`
    width: 100%;
    border-bottom: 1px solid #eeeeee;

    .itemInfoArea {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0.63rem;

        .itemInfo {
            display:inline-block;

            p {
                display:inline-block;
                width: 100%;
                margin: 0px;
            }
        }

        .thumbnail {
            display:inline-block;
            width: 7rem;
            height: 7rem;
            background-color: #dddddd;
        }
    }
`

const ItemListFrame = () => {
    return (
        <ItemListFrameStyle>
            <div className="itemInfoArea">
                <div className="itemInfo">
                    <p>업체명</p>
                    <p>
                        <span>위치</span>
                        <span>작성일</span>
                    </p>
                    <p>태그 리스트</p>
                    <p>작성자명</p>
                </div>
                <div className="thumbnail">

                </div>
            </div>
        </ItemListFrameStyle>
    )
}

export default ItemListFrame;