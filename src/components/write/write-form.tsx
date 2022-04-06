import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const WriteFormStyle = styled.div`
    width: 100%;

    .writeFormContainer {
        width: 100%;

        .writeForm {
            width: 100%;

            .writeInfo {
                width: 100%;

                .writeInfoList {
                    width: 100%;
                    border-bottom: 1px solid #eeeeee;

                    .writeTitle {
                        font-size: 1.1rem;
                        font-weight: 400;
                    }

                    .reviewTextarea {
                        width: 100%;
                        height: 15rem;
                        resize: none;
                        border: 1px solid #dddddd;
                        border-radius: 5px;
                        outline: none;

                        :focus {
                            border: 1px solid #666666;
                        }
                    }
                }
            }

            .uploadBtn {
                width: 100%;
                height: 3rem;
                border: none;
                border-radius: 5px;
            }
        }
    }
`;

//사용자 입력값 타입
interface WriteInfo {
    subway: string,
    keyword: string,
    placeInfo: string,
    review: string,
    uploadFile: File | string
}

const WriteForm = () => {
    // let uploadFile:File;
    const [writeInfo , setWriteInfo] = useState<WriteInfo>({
        subway: "",
        keyword: "",
        placeInfo: "",
        review: "",
        uploadFile: ""
    });

    //등록한 이미지 저장
    const onChangeImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const targetName = e.target.name;
        
        if(e.target.files){
            // uploadFile = e.target.files[0]

            await setWriteInfo({ 
                ...writeInfo,
                [targetName]: e.target.files[0] // name 키를 가진 값을 이벤트가 발생한 value로 변경
            });
        }
    }

    //write form 상태 값 변경
    const userInfoWrite = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const targetName = e.target.name;

        await setWriteInfo({ 
            ...writeInfo,
            [targetName]: e.target.value // name 키를 가진 값을 이벤트가 발생한 value로 변경
        });

        console.log(writeInfo)
    }

    //리뷰 상태 값 변경
    const userInfoWriteTextArea = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const targetName = e.target.name;
        
        await setWriteInfo({ 
            ...writeInfo,
            [targetName]: e.target.value // name 키를 가진 값을 이벤트가 발생한 value로 변경
        });

        console.log(writeInfo)
    }

    //입력 값 전송
    const uploadFn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('files',writeInfo.uploadFile);
        formData.append('subway',writeInfo.subway);
        formData.append('keyword',writeInfo.keyword);
        formData.append('placeInfo',writeInfo.placeInfo);
        formData.append('review',writeInfo.review);

        console.log(formData)
        
        await axios({
            method: 'post',
            url: 'http://localhost:3001/write/upload',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    }

    return (
        <WriteFormStyle>
            <div className="writeFormContainer">
                <form className="writeForm" 
                    onSubmit={uploadFn}
                >
                    <ul className="writeInfo">
                        <li className="writeInfoList">
                            <input type="file" 
                                name="uploadFile" 
                                accept="image/*" 
                                onChange={onChangeImg}
                            />
                        </li>
                        <li className="writeInfoList">
                            <p className="writeTitle">가까운 지하철역</p>
                            <input type="text" 
                                name="subway"
                                placeholder="지하철역을 입력하세요." 
                                onChange={userInfoWrite}
                            />
                        </li>
                        <li className="writeInfoList">
                            <p className="writeTitle">이 장소를 잘 표현하는 키워드</p>
                            <input type="text" 
                                name="keyword"
                                placeholder="키워드를 입력하세요." 
                                onChange={userInfoWrite}
                            />
                        </li>
                        <li className="writeInfoList">
                            <p className="writeTitle">유용한 장소 정보</p>
                            <input type="text" 
                                name="placeInfo"
                                placeholder="장소 정보를 입력하세요." 
                                onChange={userInfoWrite}
                            />
                        </li>
                        <li className="writeInfoList">
                            <p className="writeTitle">다녀온 후기</p>
                            <textarea name="review" 
                                className="reviewTextarea"
                                onChange={userInfoWriteTextArea}
                            >
                            </textarea>
                        </li>
                    </ul>

                    <button type="submit" 
                        className="uploadBtn"
                    >
                        등록
                    </button>
                </form>
            </div>
        </WriteFormStyle>
    )
}

export default WriteForm;