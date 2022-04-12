import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from 'axios';

const SignInFormStyle = styled.div`
    width: 100%;

    .signInFormContainer {
        width: 100%
        padding-left: 0.63rem;

        .loginForm {
            width: 100%;

            .loginInfo {
                width: 100%;

                .loginInfoList {
                    width: 100%;

                    .loginInfoListTitle {

                    }

                    .loginInfoInput {
                        width: 100%;
                        hegiht: 3rem;
                        border: none;
                        border-radius: 5px;
                        outline: none;
                        background-color: #eeeeee;
                        padding: 0.63rem;

                        :focus {
                            background-color: #ffffff;
                            border: 1px slide #000000;
                        }
                    }
                }   
            }
        }

        .signInBtn {
            width: 100%;
            height: 3.5rem;
            border: none;
            border-radius: 5px;
            margin-top: 3rem;
        }
    }
`;

//사용자 입력값 타입
interface LoginInfo {
    email: string,
    password: string,
}

const SignInForm = () => {
    const [loginInfo , setLoginInfo] = useState<LoginInfo>({
        email: "",
        password: "",
    });

    const loginInfoWrite = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const targetName = e.target.name;

        await setLoginInfo({ 
            ...loginInfo,
            [targetName]: e.target.value // name 키를 가진 값을 이벤트가 발생한 value로 변경
        });
    }

    const signInfoSubmit = async () => {
        await axios.post("http://localhost:3001/member/signin",loginInfo)
        .then((response) => {
            // console.log(response.data[0]);
            if(response.data[0]) {
                localStorage.setItem('ourplace_id',response.data[0].email);
                localStorage.setItem('ourplace_name',response.data[0].user_name);
                window.location.href = '/';
            } else {
                alert("이메일 또는 비밀번호가 잘못되었습니다.")
            }
        })
        .catch(err => {
            if(err) alert("로그인에 실패하였습니다.")
        });

        // await axios.post("http://localhost:3001/member/signin",loginInfo)
        // .then((response) => {
        //     if(response.data[0].count > 0) {
        //         window.location.href = '/'; //작성 완료 후 게시글 페이지로 이동    
        //     } else {
        //         alert('아이디 또는 패스워드가 잘못되었습니다.');
        //     }
        // })
        // .catch(err => {
        //     console.log(err);
        // });
    }

    return (
        <SignInFormStyle>
            <div className="signInFormContainer">
                <form className="loginForm">
                    <ul className="loginInfo">
                        <li className="loginInfoList">
                            <p className="loginInfoListTitle">이메일</p>
                            <input type="text" 
                                placeholder="이메일을 입력하세요" 
                                className="loginInfoInput"
                                name="email"
                                onChange={loginInfoWrite}
                            />
                        </li>
                        <li className="loginInfoList">
                            <p className="loginInfoListTitle">비밀번호</p>
                            <input type="password" 
                                placeholder="비밀번호를 입력하세요" 
                                className="loginInfoInput"
                                name="password"
                                onChange={loginInfoWrite}
                            />
                        </li>
                    </ul>

                    <button type="submit"
                        className="signInBtn"
                        onClick={signInfoSubmit}
                    >
                        로그인
                    </button>
                </form>
            </div>
        </SignInFormStyle>
    )
};

export default SignInForm;