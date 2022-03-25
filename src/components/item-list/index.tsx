import React from "react";
import styled from "styled-components";

import ItemListFilter from "./item-list-filter";

const ItemListStyle = styled.div`
    width: 100%;
`;

const ItemList = () => {
    return (
        <ItemListStyle>
            <ItemListFilter />
        </ItemListStyle>
    )
};

export default ItemList;