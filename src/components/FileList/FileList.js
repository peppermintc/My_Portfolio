import React, { useContext } from 'react'
import File from '../File/File';
import { FilesContext } from '../../App';

export default function FileList() {
  const files = useContext(FilesContext);

  return (
      <div style={{display:"flex", flexDirection:"row"}}>
        {files.map((file, index) => <File key={index} imgsrc={file.fileImage} iconName={file.name} />)}
      </div>
  )
}
