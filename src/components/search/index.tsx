import React, { useState } from "react";
import styled from "styled-components";

const SearchStyle = styled.div`
    .searchContainer {
        width: 100%;
        padding: 5px 0px;
        border-bottom: 1px solid #cccccc;

        .searchBar {
            width: 100%;
            height: 3vw;
            border: none;
            outline: none;
            padding: 0px 10px;
        }
    }
`

const Search = () => {
    const [searchKeyword, setSearchKeyword] = useState<string>("");

    return (
        <SearchStyle>
            <div className="searchContainer">
                <input type="text" 
                    className="searchBar" 
                    onChange={({target}) => {setSearchKeyword(target.value)}}
                />
            </div>
        </SearchStyle>
    )
};

export default Search;