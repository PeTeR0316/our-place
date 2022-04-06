import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import ItemListFilter from "./item-list-filter";
import ItemListFrame from "./item-list-frame";

const ItemListStyle = styled.div`
    width: 100%;
    position: relative;
    overflow: scroll;
    padding-bottom: 5rem;

    .moreBtn {
        width: 100%;
        height: 3rem;
        text-align: center;
        margin-top: 2rem;
        border: none;
        width: 80%;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }
`;

const ItemList = () => {
    const [itemListCount, setItemListCount] = useState<number>(50);
    const [reviewImg, setReviewImg] = useState<Array<string>>([]);
    const reviewUrl = "https://our-place.s3.ap-northeast-2.amazonaws.com/write-img/";

    //s3 버킷에서 리뷰 이미지 파일명 요청
    useEffect(() => {
        axios.get('http://localhost:3001/reviewList/list')
            .then(response => {
                setReviewImg(response.data.filter((src:string) => src !== ''));
            })
            .catch(err => console.log(err));
    },[]);

    return (
        <ItemListStyle style={{height:`${itemListCount}rem`}}>
            <ItemListFilter />
            {/* <ItemListFrame />
            <ItemListFrame />
            <ItemListFrame />
            <ItemListFrame />
            <ItemListFrame />
            <ItemListFrame />
            <ItemListFrame />
            <ItemListFrame /> */}

            {reviewImg.map((reviewImgName, index) => {
                return (
                    <ItemListFrame imgSrc={`${reviewUrl}${reviewImgName}`}/>
                )
            })}

            <button type="button" className="moreBtn"
                onClick={() => setItemListCount(itemListCount + 30)}
            >
                더보기+
            </button>
        </ItemListStyle>
    )
};

export default ItemList;