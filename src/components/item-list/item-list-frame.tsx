import React, { useState ,useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

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
`

interface ReviewProps {
    place_name: string,
    subway: string,
    keyword: string,
    user_name: string,
    write_date: string,
    file_src: string,
}


const ItemListFrame = ({ place_name, subway, keyword, user_name, write_date, file_src}: ReviewProps) => {
    const reviewUrl = "https://our-place.s3.ap-northeast-2.amazonaws.com/write-img/";

    // useEffect(() => {
    //     async function getStoreInfo() {
    //         await axios.get(`http://localhost:3001/store/detail/${imgName}`)
    //             .then(response => {
    //                 setStoreInfo(response.data);
    //             })
    //             .catch(err => console.log(err))   
    //     }

    //     getStoreInfo();
    // },[])

    return (
        <ItemListFrameStyle>
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
        </ItemListFrameStyle>
    )
}

export default ItemListFrame;