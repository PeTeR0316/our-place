import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const ReviewListFrameStyle = styled.div`
    width: 100%;
    border-bottom: 1px solid #eeeeee;

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

    .reviewBtnArea {
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #eeeeee;

        .updateBtn {
            width: 100%;
            padding: 0.5rem 0;
            border: none;
            border-right: 1px solid #eeeeee;
            background-color: #ffffff;
        }

        .deleteBtn {
            width: 100%;
            padding: 0.5rem 0;
            border: none;
            background-color: #ffffff;
        }
    }
`;

interface ReviewProps {
    place_name: string,
    subway: string,
    keyword: string,
    user_name: string,
    write_date: string,
    file_src: string,
}

const ReviewListFrame = ({ place_name, subway, keyword, user_name, write_date, file_src}: ReviewProps) => {
    const reviewUrl = "https://our-place.s3.ap-northeast-2.amazonaws.com/write-img/";

    const deleteReview = () => {
        console.log("delete");
        axios.delete(`http://localhost:3001/mypage/review/delete/${file_src}`)
        .then(response => {
            if(response.data) {
                console.log(response.data)
            }
        })
        .catch(err => alert("해당 리뷰를 삭제하지 못 했습니다."));
    };

    const updateReview = () => {
        console.log("update");
        // axios.put(`http://localhost:3001/mypage/review/${file_src}`)
        // .then()
        // .catch(err => alert("해당 리뷰를 삭제하지 못 했습니다."));
    }
    
    return (
        <ReviewListFrameStyle>
            <Link to={`/store/${file_src}`}>
                <div className="itemInfoArea">
                    <div className="itemInfo">
                        <p className="itemInfoList">
                            <span className="infotitle">
                                업체명:
                            </span> 
                            {place_name}    
                        </p>
                        <p className="itemInfoList">
                            <span className="infotitle">
                                위치:
                            </span>
                            {subway}
                        </p>
                        <p className="itemInfoList">
                            <span className="infotitle">
                                태그 리스트:
                            </span>
                            {keyword}
                        </p>
                        <p className="itemInfoList">
                            <span className="infotitle">
                                작성자명:
                            </span>
                            {user_name}
                        </p>
                        <p className="itemInfoList">
                            <span className="infotitle">
                                작성일:
                            </span>
                            {write_date.slice(0,10)}
                        </p>
                    </div>
                    <div className="thumbnail">
                        <img src={`${reviewUrl}${file_src}`} 
                            className="reviewThumnailImg" 
                            alt="review-thumnail-img" 
                        />
                    </div>
                </div>
            </Link>

            <div className="reviewBtnArea">
                <button type="button" 
                    className="updateBtn"
                    onClick={updateReview}
                >
                    수정
                </button>

                <button type="button" 
                    className="deleteBtn"
                    onClick={deleteReview}
                >
                    삭제
                </button>
            </div>
        </ReviewListFrameStyle>
    )
};

export default ReviewListFrame;