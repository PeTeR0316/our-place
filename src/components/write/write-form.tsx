import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const WriteFormStyle = styled.div`
`;

interface ConciergeImageType {
    index: number;
    description: string;
    preview: string;
    file: File | null;
  }

const WriteForm = () => {
    const [uploadImage, setUploadImage] = useState<FileList>()
    const [images, setImages] = useState('');
    const [file, setFile] = useState<FileList | undefined>()

    // const onChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     e.preventDefault();
        
    //     if(e.target.files){
    //       const uploadFile = e.target.files[0]
    //       const formData = new FormData()
    //       formData.append('files',uploadFile)
    //     }
    // }

    const onChangeImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        
        if(e.target.files){
            const uploadFile = e.target.files[0]
            const formData = new FormData()
            formData.append('files',uploadFile)

            // console.log(formData.values());

            for (let values of formData.values()) {
                console.log(values); // 이미지 객체의 정보
            }
            
            await axios({
                method: 'post',
                url: 'http://localhost:3001/upload',
                data: formData,
                headers: {
                'Content-Type': 'multipart/form-data',
                },
            })
        }
    }

    return (
        <WriteFormStyle>
            <div className="writeFormContainer">
                <form action="" method="post">
                    <ul>
                        <li>
                            <input type="file" id="profile-upload" accept="image/*" onChange={onChangeImg}/>
                        </li>
                        {/* <li>
                            <input 
                                id='image'
                                type='file'
                                multiple
                                onChange={imageSelectHandler}
                            />
                        </li> */}
                        <li>
                            <p>가까운 지하철역</p>
                        </li>
                        <li>
                            <p>이 장소를 잘 표현하는 키워드</p>
                        </li>
                        <li>
                            <p>유용한 장소 정보</p>
                        </li>
                        <li>
                            <textarea name="review"></textarea>
                        </li>
                    </ul>

                </form>
            </div>
        </WriteFormStyle>
    )
}

export default WriteForm;