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
                padding-bottom: 0.5rem;

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

interface reviewImgSrc {
    imgSrc: string,
    imgName: string
}

interface StoreInfo {
    user_name: string,
    place_name: string
    file_src: string,
    subway: string,
    keyword: string,
    placeInfo: string,
    review: string
    write_date: string
}

const ItemListFrame = ({imgSrc, imgName}:reviewImgSrc) => {
    const [storeInfo, setStoreInfo] = useState<Array<StoreInfo>>([
        {
            user_name: "",
            place_name: "",
            file_src: "",
            subway: "",
            keyword: "",
            placeInfo: "",
            review: "",
            write_date: ""
        }
    ]);

    useEffect(() => {
        async function getStoreInfo() {
            await axios.get(`http://localhost:3001/store/detail/${imgName}`)
                .then(response => {
                    setStoreInfo(response.data);
                })
                .catch(err => console.log(err))   
        }

        getStoreInfo();
    },[])

    return (
        <ItemListFrameStyle>
            <Link to={`/store/${imgName}`}>
            <div className="itemInfoArea">
                
                    <div className="itemInfo">
                        <p className="itemInfoList">
                            <span className="infotitle">
                                업체명:
                            </span> 
                            {storeInfo[0].place_name}    
                        </p>
                        <p className="itemInfoList">
                            <span className="infotitle">
                                위치:
                            </span>
                            {storeInfo[0].subway}
                        </p>
                        <p className="itemInfoList">
                            <span className="infotitle">
                                태그 리스트:
                            </span>
                            {storeInfo[0].keyword}
                        </p>
                        <p className="itemInfoList">
                            <span className="infotitle">
                                작성자명:
                            </span>
                            {storeInfo[0].user_name}
                        </p>
                        <p className="itemInfoList">
                            <span className="infotitle">
                                작성일:
                            </span>
                            {storeInfo[0].write_date.slice(0,10)}
                        </p>
                    </div>
                    <div className="thumbnail">
                        <img src={imgSrc} 
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