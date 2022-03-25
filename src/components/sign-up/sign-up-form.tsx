import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SignUpFormStyle = styled.div`
    width: 100%;

    .signUpFormContainer {
        width: 100%
        padding-left: 0.63rem;
    }
`;

const SignUpForm = () => {
    return (
        <SignUpFormStyle>
            <div className="signUpFormContainer">
                <form action="" method="post">
                    <ul>
                        <li>
                            <p>이메일</p>
                            <input type="text" placeholder="이메일을 입력하세요" />
                        </li>
                        <li>
                            <p>비밀번호</p>
                            <input type="password" placeholder="비밀번호를 입력하세요" />
                        </li>
                        <li>
                            <p>비밀번호 확인</p>
                            <input type="password" placeholder="비밀번호를 다시 입력하세요" />
                        </li>
                        <li>
                            <p>이름</p>
                            <input type="text" placeholder="이름을 입력하세요" />
                        </li>
                        <li>
                            <p>생년월일</p>
                            <input type="text" placeholder="생년월일을 입력하세요" />
                        </li>
                    </ul>

                    <button type="submit">
                        회원가입
                    </button>
                </form>
            </div>
        </SignUpFormStyle>
    )
};

export default SignUpForm;