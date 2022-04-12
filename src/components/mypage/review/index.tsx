import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import MypageMenuHeader from "../mypage-menu-header";
import ReviewListFilter from "./review-list-filter";
import ReviewListFrame from "./review-list-frame";

const MypageReviewStyle = styled.div`
    overflow: scroll;

    .myReviewList {
        border-bottom : 1px solid #eeeeee;

        .itemInfoArea {
            padding: 0.63rem;
            width: 100%;
            display: flex;
            justify-content: space-between;
    
            .itemInfo {
                display:inline-block;
    
                .itemInfoList {
                    display:inline-block;
                    width: 100%;
                    margin: 0px;
    
                    :not(:last-child) {
                        padding-bottom: 0.5rem;
                    }
    
                    .infotitle {
                        padding-right: 0.3rem;
                    }
                }
            }
    
            .thumbnail {
                display:inline-block;
    
                .reviewThumnailImg {
                    width: 8rem;
                    height: 8rem;
                    object-fit: cover;
                }
            }
        }
    }

    .moreArea {
        padding: 0.63rem;
        margin-top: 2rem;

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
`;

interface StoreInfo {
    user_name: string,
    place_name: string
    file_src: string,
    subway: string,
    keyword: string,
    placeInfo: string,
    review: string
    write_date: string,
    email:string
}

const MypageReview = () => {
    const reviewUrl = "https://our-place.s3.ap-northeast-2.amazonaws.com/write-img/";
    const [itemListCount, setItemListCount] = useState<number>(5);
    const [userEmail, setUserEmail] = useState<string | null>(localStorage.getItem('ourplace_id'))
    const [reviewList, setReviewList] = useState<Array<StoreInfo>>([
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
    ]);

    useEffect(() => {
        axios.get(`http://localhost:3001/mypage/review/${userEmail}`)
            .then(response => {
                setReviewList(response.data);
            })
            .catch(err => alert("리스트를 불러오지 못 했습니다."));
    },[]);

    return (
        <MypageReviewStyle>
            <MypageMenuHeader title="작성한 리뷰" />
            <ReviewListFilter count={`${reviewList.length}`}/>

            
            {reviewList.map((reviewinfo, index) => {
                if(index < itemListCount) {
                    return (
                        <ReviewListFrame 
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


            <div className="moreArea">
                <button type="button" className="moreBtn"
                    onClick={() => setItemListCount(itemListCount + 5)}
                >
                    더보기+
                </button>
            </div>
        </MypageReviewStyle>
    )
};

export default MypageReview;