import React, { useState } from "react";
import styled from "styled-components";

const ReviewListFilterStyle = styled.div`
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

        .reviewCount {
            font-size: 1rem;
        }

        .filterSelect {
            border: none;
            font-size: 1rem;
        }
    }
`;

interface ReviewListFilterProps {
    count: string
}

const ReviewListFilter = ({count}: ReviewListFilterProps) => {
    const [listCount, setListCount] = useState<number>(0);

    return (
        <ReviewListFilterStyle>
            <div className="filterContainer">
                <span className="reviewCount">작성한 리뷰 {count}개</span>

                <select name="filter" className="filterSelect">
                    <option value="new">최신순</option>
                    <option value="popular">인기순</option>
                </select>
            </div>
        </ReviewListFilterStyle>
    )
};

export default ReviewListFilter;