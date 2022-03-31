import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUpFormStyle = styled.div`
    width: 100%;

    .signUpFormContainer {
        width: 100%
        padding-left: 0.63rem;

        .userinfoForm {
            width: 100%;

            .userInfoContainer {
                width: 100%;

                .userInfoList {
                    width: 100%;
                    padding: 0.6rem 0px;
                    .userInfoListTitle {
                        color: #000000;
                        font-weight: 400;
                        font-size: 1rem;
                    }

                    .userInfoInput {
                        width: 100%;
                        height: 3rem;
                        border: none;
                        border-radius: 5px;
                        background-color: #eeeeee;
                        padding: 0.63rem;
                        outline: none;
                        
                        :focus {
                            border : 1px solid #000000;
                            background-color: #ffffff;   
                        }
                    }
                }
            }

            .signUpBtn {
                width: 100%;
                height: 3.5rem;
                border: none;
                border-radius: 5px;
                margin-top: 3rem;
            }

            .compliteBtn {
                color: #ffffff;
                background-color: #444444;
                transition: 0.6s ease 0s;
            }
        }
    }
`;

//사용자 회원가입 입력값 타입
interface UserInfo {
    email: string,
    password: string,
    passwordCheck: string,
    name: string,
    birth: string
}

const SignUpForm = () => {
    const [userInfo , setUserInfo] = useState<UserInfo>({
        email: "",
        password: "",
        passwordCheck: "",
        name: "",
        birth: ""
    });

    const userInfoWrite = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const targetName = e.target.name;

        await setUserInfo({ 
            ...userInfo,
            [targetName]: e.target.value // name 키를 가진 값을 이벤트가 발생한 value로 변경
        });

        console.log(userInfo)
    }

    const userInfoSubmit = async () => {
        if(userInfo.password === userInfo.passwordCheck) {
            axios.post("http://localhost:3001/member/signup",userInfo)
            .then((response) => {
                if(response.data[0].count > 0) {
                    console.log(response.data[0] + "이미 회원가입된 계정입니다.")
                } else {
                    window.location.href = '/login';
                }
            })
            .catch(err => {
                if(err) alert("회원가입에 실패하였습니다.")
            });
        } else {
            alert("비밀번호를 확인해주세요")
        }
    }
    
    return (
        <SignUpFormStyle>
            <div className="signUpFormContainer">
                <form className="userinfoForm">
                    <ul className="userInfoContainer">
                        <li className="userInfoList">
                            <p className="userInfoListTitle">이메일</p>
                            <input className="userInfoInput" 
                                type="text" 
                                name="email"
                                placeholder="이메일을 입력하세요" 
                                onChange={userInfoWrite}
                            />
                        </li>
                        <li className="userInfoList">
                            <p className="userInfoListTitle">비밀번호</p>
                            <input className="userInfoInput" type="password" name="password" placeholder="비밀번호를 입력하세요" 
                                onChange={userInfoWrite}
                            />
                        </li>
                        <li className="userInfoList">
                            <p className="userInfoListTitle">비밀번호 확인</p>
                            <input className="userInfoInput" type="password" name="passwordCheck" placeholder="비밀번호를 다시 입력하세요" 
                                onChange={userInfoWrite}
                            />
                        </li>
                        <li className="userInfoList">
                            <p className="userInfoListTitle">이름</p>
                            <input className="userInfoInput" type="text" name="name" placeholder="이름을 입력하세요" 
                                onChange={userInfoWrite}
                            />
                        </li>
                        <li className="userInfoList">
                            <p className="userInfoListTitle">생년월일</p>
                            <input className="userInfoInput" type="text" name="birth" placeholder="생년월일을 입력하세요 ex)YYYYMMDD" 
                                onChange={userInfoWrite}
                            />
                        </li>
                    </ul>

                    <button type="submit" 
                        className={`signUpBtn ${
                            userInfo.email !== "" && 
                            userInfo.password !== "" && 
                            userInfo.passwordCheck !== "" &&
                            userInfo.name !== "" &&
                            userInfo.birth !== "" ?
                            "compliteBtn" : ""
                        }`}
                        onClick={userInfoSubmit}
                    >
                        회원가입
                    </button>
                </form>
            </div>
        </SignUpFormStyle>
    )
};

export default SignUpForm;