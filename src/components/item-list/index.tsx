import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/modules";

import ItemListFilter from "./item-list-filter";
import ItemListFrame from "./item-list-frame";

const ItemListStyle = styled.div`
    width: 100%;
    position: relative;
    padding-bottom: 3.5rem;

    .moreArea {
        padding: 1rem 0.63rem;

        .moreBtn {
            width: 100%;
            height: 3rem;
            text-align: center;
            border: none;
            border-radius: 0.4rem;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    .none {
        display: none;
    }
`;

interface StoreInfo {
    user_name: string,
    place_name: string
    file_src: string,
    subway: string,
    keyword: string,
    placeInfo: string,
    review: string,
    write_date: string,
    email:string
}

const ItemList = () => {
    const [itemListCount, setItemListCount] = useState<number>(5);
    const [reviewListInfo, setReviewListInfo] = useState<StoreInfo[]>([
        {
            user_name: "",
            place_name: "",
            file_src: "",
            subway: "",
            keyword: "",
            placeInfo: "",
            review: "",
            write_date: "",
            email: ""
        }
    ])
    const filter = useSelector((state: RootState) => state.filter.filter); //리듀서.상태값

    //s3 버킷에서 리뷰 이미지 파일명 요청
    useEffect(() => {
        axios.get(`http://localhost:3001/reviewList/list/${filter}`)
            .then(response => {
                setReviewListInfo(response.data)
            })
            .catch(err => console.log(err));
    },[filter]);

    return (
        <ItemListStyle>
            <ItemListFilter count={`${reviewListInfo.length}`} />
            
            {reviewListInfo.map((reviewinfo, index) => {
                if(index < itemListCount) {
                    return (
                        <ItemListFrame 
                            place_name={`${reviewinfo.place_name}`}
                            subway={`${reviewinfo.subway}`}
                            keyword={`${reviewinfo.keyword}`}
                            user_name={`${reviewinfo.user_name}`}
                            write_date={`${reviewinfo.write_date}`}
                            file_src={`${reviewinfo.file_src}`}
                        />
                    )
                }
            })}

            <div className={`moreArea ${itemListCount > reviewListInfo.length ? 'none' : '' }`}>
                <button type="button" className="moreBtn"
                    onClick={() => setItemListCount(itemListCount + 5)}
                >
                    더보기+
                </button>
            </div>
        </ItemListStyle>
    )
};

export default ItemList;