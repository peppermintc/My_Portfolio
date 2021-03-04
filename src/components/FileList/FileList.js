import React from 'react'
import File from '../File/File';

export default function FileList({ files }) {
    return (
        <div style={{display:"flex", flexDirection:"row"}}>
          {files.map((file, index) => <File key={index} imgsrc={file.fileImage} iconName={file.name} />)}
        </div>
    )
}
