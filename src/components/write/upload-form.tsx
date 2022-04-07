import axios from 'axios'
import React, {useState} from 'react'

const UploadForm: React.FC = () => {
	const [file, setFile] = useState<FileList | undefined>()
	const [fileName, setFileName] = useState<string>('이미지 파일을 업로드 해주세요')

	const imageSelectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const fileList = e.target.files;
		if (fileList != null) {
			setFile(fileList)
			setFileName(fileList[0].name)

            console.log("file: " + file);
            console.log("fileName:" + fileName);
		}
	}
	
	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData();
		// formData.append("image", file )
        // Array.from(file).forEach((f) => formData.append("image", f)); 		
	
		try {
			const res = await axios.post('/server/upload/', formData, {
				headers: {"Content-Type": "multipart/form-data"}
			})
			console.log({res});
			alert(`success !!`)
			
		} catch (e) {
			alert(`fail!!`);
			console.log(e);
		}
	}


	return (
		<form onSubmit={onSubmit}>
			<label htmlFor='image'>{fileName}</label>
			<input 
				id='image'
				type='file'
				multiple
				onChange={imageSelectHandler}
			/>
			<button type='submit'>제출</button>
			
		</form>
	)
}

export default UploadForm