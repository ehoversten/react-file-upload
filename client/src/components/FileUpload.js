import React, { Fragment, useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    // Setup State
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});

    const onChange = (e) => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    }

    const onSubmit = async e => {
        e.preventDefault();
        console.log('entering submit ...');
        const formData = new FormData();
        formData.append('file', file);
        console.log(formData);

        try {
            const res = await axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(res.data);
            console.log("*********");
            // Pull out the fileName and filePath from the Response.data
            const { fileName, filePath } = res.data;
            setUploadedFile({ fileName, filePath });

        } catch(err) {
            if(err.response.status === 500) {
                console.log("There was a problem from the server");
            } else {
                console.log(err.response.data.msg);
            }
        }
    };

    return (
        <Fragment>  
            <form onSubmit={onSubmit}>
                <div className="custom-file mb-4">
                    <input type="file" className="custom-file-input" id="customFile" onChange={onChange}/>
                    <label className="custom-file-label" htmlFor="customFile">
                        {filename}
                    </label>

                </div>

                <input type="submit" value="Upload" className="btn btn-primary btn-block mt-4"/>
            </form>
        </Fragment>
    )
}

export default FileUpload