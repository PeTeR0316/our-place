import React, { useState } from "react";
import styled from "styled-components";

const KindReviewListFilterStyle = styled.div`
    width: 100%;
    position: sticky;
    top: 0px;
    background-color: #ffffff;

    .filterContainer {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding : 0.63rem;
        border-bottom: 1px solid #eeeeee;

        .resultCount {
            font-size: 1rem;
        }

        .filterSelect {
            border: none;
            font-size: 1rem;
        }
    }
`;

interface ReviewCountProps {
    count: string
}

const KindReviewListFilter = ({count}: ReviewCountProps) => {
    const [listCount, setListCount] = useState<number>(0);

    return (
        <KindReviewListFilterStyle>
            <div className="filterContainer">
                <span className="resultCount">총 {count}개 결과</span>

                <select name="filter" className="filterSelect">
                    <option value="new">최신순</option>
                    <option value="popular">인기순</option>
                </select>
            </div>
        </KindReviewListFilterStyle>
    )
};

export default KindReviewListFilter;