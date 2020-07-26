import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core'
import ImageUpload from './ImageUpload'
const Containner = () => {
    const [uploadFile, setUploadFile] = useState(null)
    const callback = data => {
        setUploadFile(data)
    }
    useEffect(() => {
        if (uploadFile) console.log(uploadFile[0].name)
    }, [uploadFile])
    return (
        <div className="container secondContainer">
            <div className="uploadContainer">
                <ImageUpload isActive={uploadFile} parenCallback={callback} />
                <Button className="btn" variant="contained" color="secondary">UPLOAD</Button>
            </div>
        </div>
    );
}

export default Containner;
