import React, { Fragment } from 'react';

const FileUpload = () => {
    return (
        <Fragment>  
            <form>
                <div class="custom-file mb-4">
                    <input type="file" class="custom-file-input" id="customFile" />
                    <label class="custom-file-label" htmlFor="customFile">
                        Choose file
                    </label>

                </div>

                <input type="submit" value="Upload" className="btn btn-primary btn-block mt-4"/>
            </form>
        </Fragment>
    )
}

export default FileUpload
