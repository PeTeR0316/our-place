import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MypageMenuStyle = styled.div`
    width: 100%;

    .mypageMenuContainer {
        width: 100%;

        .mypageMenu {
            border: 1px solid #eeeeee;

            .mypageMenuList {
                width: 100%;
                padding: 0.5rem;
                font-size: 1.1rem;

                :not(:last-child) {
                    border-bottom: 1px solid #eeeeee;
                }
            }
        }
    }
    
`;

const MypageMenu = () => {
    return (
        <MypageMenuStyle>
            <div className="mypageMenuContainer">
                <ul className="mypageMenu">
                    <li className="mypageMenuList">
                        <Link to="/mypage/review/">
                            작성한 리뷰
                        </Link>    
                    </li>
                    <li className="mypageMenuList">
                        <Link to="/mypage/withdrawal">
                            회원탈퇴
                        </Link>    
                    </li>
                </ul>
            </div>
        </MypageMenuStyle>
    )
};

export default MypageMenu;