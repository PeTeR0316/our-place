import React, { useState } from "react";
import styled from "styled-components";

const ItemListFilterStyle = styled.div`
    width: 100%;

    .filterContainer {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding : 0.63rem;

        .resultCount {
            font-size: 1rem;
        }

        .filterSelect {
            border: none;
            font-size: 1rem;
        }
    }
`;

const ItemListFilter = () => {
    const [listCount, setListCount] = useState<number>(0);

    return (
        <ItemListFilterStyle>
            <div className="filterContainer">
                <span className="resultCount">총 {listCount}개 결과</span>

                <select name="filter" className="filterSelect">
                    <option value="new">최신순</option>
                    <option value="popular">인기순</option>
                </select>
            </div>
        </ItemListFilterStyle>
    )
};

export default ItemListFilter;