import React, { useState, useRef } from "react";
import styled from "styled-components";

import ICONS from "../../assets/icons";

const SearchStyle = styled.div`
    .searchContainer {
        width: 100%;
        padding: 5px 0px;
        border-bottom: 1px solid #cccccc;
        position: relative;

        .searchBar {
            width: 100%;
            height: 2rem;
            border: none;
            outline: none;
            padding: 0px 10px;
            font-size: 1rem;
            position: relative;
        }

        .searchIcon {
            width: 2rem;
            height: 2rem;
            position: absolute;
            top: 50%;;
            right: 0.5rem;
            transform: translateY(-50%);
            cursor: pointer;
        }
    }
`

const Search = () => {
    const [searchKeyword, setSearchKeyword] = useState<string>("");
    const searchInput = useRef<HTMLInputElement>(null);

    const searchFocus = () => {
        if (searchInput.current) {
          searchInput.current.focus();
        }
    };

    return (
        <SearchStyle>
            <div className="searchContainer">
                <input type="text" 
                    className="searchBar" 
                    onChange={({target}) => {setSearchKeyword(target.value)}}
                    ref={searchInput}
                />

                <img className="searchIcon" 
                    src={ICONS.ICON_SEARCH} alt="search-icon" 
                    onClick={searchFocus}
                />
            </div>
        </SearchStyle>
    )
};

export default Search;