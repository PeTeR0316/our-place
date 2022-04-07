import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BottomMenuStyle = styled.div`
    width: 100%;
    position: fixed;
    bottom: 0px;
    z-index: 99;
    background-color: #ffffff;

    .bottomMenuContainer {
        width: 100%;
        border-top: 1px solid #eeeeee;

        .BottomMenu {
            display: flex;
            justify-content: space-around;

            .bottomMenuList {
                display: inline-block;
                font-size: 1rem;
                height: 2.6rem;
                line-height: 3rem;
            }
        }
    }
`

const signInCheck = () => {
    //alert(localStorage.getItem('ourplace_name'));

    if(!localStorage.getItem('ourplace_name')) {
        console.log("로그인 후 작성이 가능합니다.")
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