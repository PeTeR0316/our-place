import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import axios from "axios";

import DetailHeader from "../../components/store/detail-header";
import DetailThumbnail from "../../components/store/detail-thumbnail";
import DetailText from "../../components/store/detail-text";

const StoreStyle = styled.div`
`

interface StoreInfo {
    user_name: string,
    place_name: string
    file_src: string,
    subway: string,
    keyword: string,
    placeInfo: string,
    review: string
}

const Store = () => {
    const { storeId } = useParams(); 

    const [storeInfo, setStoreInfo] = useState<Array<StoreInfo>>([
        {
            user_name: "",
            place_name: "",
            file_src: "",
            subway: "",
            keyword: "",
            placeInfo: "",
            review: ""
        }
    ]);

    useEffect(() => {
        async function getStoreInfo() {
            await axios.get(`http://localhost:3001/store/detail/${storeId}`)
                .then(response => {
                    setStoreInfo(response.data);
                })
                .catch(err => console.log(err))   
        }

        getStoreInfo();
    },[])

    return (
        <StoreStyle>
            <DetailHeader storeName={`${storeInfo[0].place_name}`} />
            <DetailThumbnail imgName={`${storeId}`}  />
            <DetailText 
                name={`${storeInfo[0].user_name}`}
                subway= {`${storeInfo[0].subway}`}
                keyword= {`${storeInfo[0].keyword}`}
                placeInfo= {`${storeInfo[0].placeInfo}`}
                review= {`${storeInfo[0].review}`}
            />     
        </StoreStyle>
    )
};

export default Store;