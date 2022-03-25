import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BottomMenuStyle = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0px;
    z-index: 99;

    .bottomMenuContainer {
        width: 100%;

        .BottomMenu {

            .bottomMenuList {
                display: inline-block;
            }
        }
    }
`

const BottomMenu = () => {
    return (
        <BottomMenuStyle>
            <div className="bottomMenuContainer">
                <ul className="BottomMenu">
                    <li className="bottomMenuList">
                        <Link to="/">
                            장소
                        </Link>
                    </li>
                    <li className="bottomMenuList">
                        <Link to="/">
                            순위
                        </Link>
                    </li>
                    <li className="bottomMenuList">
                        <Link to="/write">
                            글쓰기
                        </Link>
                    </li>
                    <li className="bottomMenuList">
                        <Link to="/">
                            저장
                        </Link>
                    </li>
                    <li className="bottomMenuList">
                        <Link to="/login">
                            내정보
                        </Link>
                    </li>
                </ul>
            </div>
        </BottomMenuStyle>
    )
};

export default BottomMenu;