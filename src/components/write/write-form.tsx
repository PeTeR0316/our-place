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
                        margin : 0px;
                        padding: 0.8rem 0px;
                    }

                    .writeInput {
                        width: 100%;
                        max-width: 600px;
                        height: 2.5rem;
                        margin-bottom: 0.8rem;
                        border: 1px solid #dddddd;
                        border-radius: 5px;
                        padding-left: 0.5rem;
                    }

                    .writeInputFile {
                        width: 100%;
                        height: 2rem;
                        margin-bottom: 0.8rem;
                    }

                    .kindSelect {
                        width: 100%;
                        max-width:600px;
                        height: 2.5rem;
                        margin-bottom: 0.8rem;
                        border: 1px solid #dddddd;
                        border-radius: 5px;
                        padding-left: 0.5rem;
                    }

                    .reviewTextarea {
                        width: 100%;
                        max-width:600px;
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

//????????? ????????? ??????
interface WriteInfo {
    storeName: string
    subway: string,
    keyword: string,
    placeInfo: string,
    review: string,
    uploadFile: File | string,
    kind: string
}

const WriteForm = () => {
    const [writeInfo , setWriteInfo] = useState<WriteInfo>({
        storeName: "",
        subway: "",
        keyword: "",
        placeInfo: "",
        review: "",
        uploadFile: "",
        kind: "restaurant"
    });

    //????????? ????????? ??????
    const onChangeImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
        // e.preventDefault();
        const targetName = e.target.name;
        
        if(e.target.files){
            await setWriteInfo({ 
                ...writeInfo,
                [targetName]: e.target.files[0] // name ?????? ?????? ?????? ???????????? ????????? value??? ??????
            });
        }
    }

    //write form ?????? ??? ??????
    const userInfoWrite = async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const targetName = e.target.name;

        await setWriteInfo({ 
            ...writeInfo,
            [targetName]: e.target.value // name ?????? ?????? ?????? ???????????? ????????? value??? ??????
        });
    }

    //?????? ??? ??????
    const uploadFn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData();
        
        formData.append('name', `${localStorage.getItem('ourplace_name')}`);
        formData.append('email',`${localStorage.getItem('ourplace_id')}`);
        formData.append('files',writeInfo.uploadFile);
        formData.append('storeName',writeInfo.storeName);
        formData.append('subway',writeInfo.subway);
        formData.append('keyword',writeInfo.keyword);
        formData.append('placeInfo',writeInfo.placeInfo);
        formData.append('review',writeInfo.review);
        formData.append('kind',writeInfo.kind);
        
        await axios({
            method: 'post',
            url: 'http://localhost:3001/write/upload',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })

        window.location.href = '/';
    }

    return (
        <WriteFormStyle>
            <div className="writeFormContainer">
                <form className="writeForm" 
                    onSubmit={uploadFn}
                >
                    <ul className="writeInfo">
                        <li className="writeInfoList">
                            <p className="writeTitle">????????? ??????</p>
                            <input type="file" 
                                className="writeInputFile"
                                name="uploadFile" 
                                accept="image/*" 
                                onChange={onChangeImg}
                            />
                        </li>
                        <li className="writeInfoList">
                            <p className="writeTitle">?????????</p>
                            <input type="text" 
                                className="writeInput"
                                name="storeName"
                                placeholder="????????? ???????????????." 
                                onChange={userInfoWrite}
                            />
                        </li>
                        <li className="writeInfoList">
                            <p className="writeTitle">??????</p>
                            <select 
                                name="kind" 
                                className="kindSelect"
                                onChange={userInfoWrite}
                            >
                                <option value="restaurant">??????</option>
                                <option value="pub">??????</option>
                                <option value="cafe">??????</option>
                                <option value="etc">??????</option>
                            </select>
                            <p>?????? ??????: {writeInfo.kind}</p>
                        </li>
                        <li className="writeInfoList">
                            <p className="writeTitle">????????? ????????????</p>
                            <input type="text"
                                className="writeInput" 
                                name="subway"
                                placeholder="??????????????? ???????????????." 
                                onChange={userInfoWrite}
                            />
                        </li>
                        <li className="writeInfoList">
                            <p className="writeTitle">??? ????????? ??? ???????????? ?????????</p>
                            <input type="text" 
                                className="writeInput"
                                name="keyword"
                                placeholder="???????????? ???????????????." 
                                onChange={userInfoWrite}
                            />
                        </li>
                        <li className="writeInfoList">
                            <p className="writeTitle">????????? ?????? ??????</p>
                            <input type="text" 
                                className="writeInput"
                                name="placeInfo"
                                placeholder="?????? ????????? ???????????????." 
                                onChange={userInfoWrite}
                            />
                        </li>
                        <li className="writeInfoList">
                            <p className="writeTitle">????????? ??????</p>
                            <textarea name="review" 
                                className="reviewTextarea"
                                onChange={userInfoWrite}
                            >
                            </textarea>
                        </li>
                    </ul>

                    <button type="submit" 
                        className="uploadBtn"
                    >
                        ??????
                    </button>
                </form>
            </div>
        </WriteFormStyle>
    )
}

export default WriteForm;