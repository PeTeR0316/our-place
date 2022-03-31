import React, { useState } from "react";
import styled from "styled-components";

import ItemListFilter from "./item-list-filter";
import ItemListFrame from "./item-list-frame";

const ItemListStyle = styled.div`
    width: 100%;
    position: relative;
    overflow: scroll;

    .moreBtn {
        width: 100%;
        height: 3rem;
        text-align: center;
        margin: 25px 0px;
        border: none;
        width: 80%;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }
`;

const ItemList = () => {
    const [itemListCount, setItemListCount] = useState<number>(50)
    return (
        <ItemListStyle style={{height:`${itemListCount}rem`}}>
            <ItemListFilter />
            <ItemListFrame />
            <ItemListFrame />
            <ItemListFrame />
            <ItemListFrame />
            <ItemListFrame />
            <ItemListFrame />
            <ItemListFrame />
            <ItemListFrame />
            <button type="button" className="moreBtn"
                onClick={() => setItemListCount(itemListCount + 30)}
            >
                더보기+
            </button>
        </ItemListStyle>
    )
};

export default ItemList;