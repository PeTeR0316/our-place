import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import MypageMenuHeader from "../mypage-menu-header";

const MypageReviewStyle = styled.div`
    padding: 0.63rem;

    .itemInfoArea {
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

    .moreArea {
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
            <p>작성한 리뷰 <span>{reviewList.length}</span>개</p>
            
            {reviewList.map((reviewinfo, index) => {
                if(index < itemListCount) {
                    return (
                        <Link to={`/store/${reviewinfo.file_src}`}>
                            <div className="itemInfoArea">
                                <div className="itemInfo">
                                    <p className="itemInfoList">
                                        <span className="infotitle">
                                            업체명:
                                        </span> 
                                        {reviewinfo.place_name}    
                                    </p>
                                    <p className="itemInfoList">
                                        <span className="infotitle">
                                            위치:
                                        </span>
                                        {reviewinfo.subway}
                                    </p>
                                    <p className="itemInfoList">
                                        <span className="infotitle">
                                            태그 리스트:
                                        </span>
                                        {reviewinfo.keyword}
                                    </p>
                                    <p className="itemInfoList">
                                        <span className="infotitle">
                                            작성자명:
                                        </span>
                                        {reviewinfo.user_name}
                                    </p>
                                    <p className="itemInfoList">
                                        <span className="infotitle">
                                            작성일:
                                        </span>
                                        {reviewinfo.write_date.slice(0,10)}
                                    </p>
                                </div>
                                <div className="thumbnail">
                                    <img src={`${reviewUrl}${reviewinfo.file_src}`} 
                                        className="reviewThumnailImg" 
                                        alt="review-thumnail-img" 
                                    />
                                </div>
                            </div>
                        </Link>
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