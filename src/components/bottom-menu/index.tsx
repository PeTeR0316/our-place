import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BottomMenuStyle = styled.div`
    width: 100%;
    height: 3.5rem;
    display:inline-block;
    position: fixed;
    bottom: 0px;
    z-index: 99;
    background-color: #ffffff;

    .bottomMenuContainer {
        width: 100%;
        height: 100%;
        border-top: 1px solid #eeeeee;
        display:inline-block;

        .BottomMenu {
            height: 100%;
            display: flex;
            justify-content: space-around;
            margin: 0;

            .bottomMenuList {
                display: inline-block;
                font-size: 1rem;
                height: 100%;
                line-height: 3.5rem;
            }
        }
    }
`

const signInCheck = () => {
    if(!localStorage.getItem('ourplace_name')) {
        alert("로그인 후 작성이 가능합니다.");
        window.location.href = '/login';
    } else {
        window.location.href = '/write';
    }
}

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
                    <li className="bottomMenuList"
                        onClick={signInCheck}
                    >
                        글쓰기
                    </li>
                    <li className="bottomMenuList">
                        <Link to="/">
                            저장
                        </Link>
                    </li>
                    <li className="bottomMenuList">
                        <Link to={!localStorage.getItem('ourplace_name') === true ? "/login" : "/mypage"}>
                            내정보
                        </Link>
                    </li>
                </ul>
            </div>
        </BottomMenuStyle>
    )
};

export default BottomMenu;