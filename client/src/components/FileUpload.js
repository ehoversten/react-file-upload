import React, { Fragment, useState } from 'react';

const FileUpload = () => {
    // Setup State
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');

    const onChange = (e) => {
        // e.preventDefault();
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    }

    return (
        <Fragment>  
            <form>
                <div class="custom-file mb-4">
                    <input type="file" class="custom-file-input" id="customFile" onChange={onChange}/>
                    <label class="custom-file-label" htmlFor="customFile">
                        {filename}
                    </label>

                </div>

                <input type="submit" value="Upload" className="btn btn-primary btn-block mt-4"/>
            </form>
        </Fragment>
    )
}

export default FileUpload
