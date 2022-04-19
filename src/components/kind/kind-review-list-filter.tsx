import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/modules";
import { filterValue } from "../../redux/modules/filter";

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
    const filter = useSelector((state: RootState) => state.filter.filter) //리듀서.상태값
    const dispatch = useDispatch();

    const filterSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        dispatch(filterValue(value));
    };

    return (
        <KindReviewListFilterStyle>
            <div className="filterContainer">
                <span className="resultCount">총 {count}개 결과</span>

                <select name="filter" 
                    className="filterSelect"
                    onChange={filterSelect}
                >
                    <option value="latest">최신순</option>
                    <option value="popularity">인기순</option>
                </select>
            </div>
        </KindReviewListFilterStyle>
    )
};

export default KindReviewListFilter;