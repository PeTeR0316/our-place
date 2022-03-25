import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SignInFormStyle = styled.div`
    width: 100%;

    .signInFormContainer {
        width: 100%
        padding-left: 0.63rem;
    }
`;

const SignInForm = () => {
    return (
        <SignInFormStyle>
            <div className="signInFormContainer">
                <form action="" method="post">
                    <ul>
                        <li>
                            <p>이메일</p>
                            <input type="text" placeholder="이메일을 입력하세요" />
                        </li>
                        <li>
                            <p>비밀번호</p>
                            <input type="text" placeholder="비밀번호를 입력하세요" />
                        </li>
                    </ul>

                    <button type="submit">
                        로그인
                    </button>
                </form>
            </div>
        </SignInFormStyle>
    )
};

export default SignInForm;