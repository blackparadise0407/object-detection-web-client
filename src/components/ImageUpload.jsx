import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

const ImageUpload = ({ parenCallback, isActive }) => {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        parenCallback(acceptedFiles)
    }, [parenCallback])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div className="imageUpload" {...getRootProps()}>
            <input {...getInputProps()} />
            {isActive ? <p>Upload another file</p> : <>
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop some files here, or click to select files</p>
                }
            </>}
        </div>
    )
}

export default ImageUpload