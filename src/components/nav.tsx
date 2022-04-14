import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavStyle = styled.nav`
    .navContainer {
        border-bottom: 1px solid #cccccc;
        
        .mainMenu {
            display: flex;
            justify-content: space-around;
            
            .mainMenuList {
                display: inline-block;
                padding: 0.63rem;
                font-size: 1rem;
            }
        }
    }
`

const Nav = () => {
    return (    
        <NavStyle>
            <div className="navContainer">
                <ul className="mainMenu">
                    <li className="mainMenuList">
                        <Link to="/">전체</Link>
                    </li>
                    <li className="mainMenuList">
                        <Link to="/kind/restaurant">맛집</Link>
                    </li>
                    <li className="mainMenuList">
                        <Link to="/kind/pub">술집</Link>
                    </li>
                    <li className="mainMenuList">
                        <Link to="/kind/cafe">카페</Link>
                    </li>
                    <li className="mainMenuList">
                        <Link to="/kind/etc">기타</Link>
                    </li>
                </ul>
            </div>
        </NavStyle>
    )
}

export default Nav;