import React, { ReactElement } from 'react';
import { useDropzone } from 'react-dropzone';

export interface FileUploadProps {
  onDrop: (files: File[]) => void;
}

const FileUpload = ({ onDrop }: FileUploadProps): ReactElement => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png'],
    },
  });

  return (
    <div {...getRootProps()} style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center' }}>
      <input {...getInputProps()} />
      <p>Drop Image Here or Click to Upload</p>
    </div>
  );
};

export default FileUpload;
