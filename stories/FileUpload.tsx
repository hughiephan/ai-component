import { ReactElement } from 'react';
import { useDropzone } from 'react-dropzone';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';

export interface FileUploadProps {
  ratio: number;
  onDrop: (files: File[]) => void;
}

const FileUpload = ({ ratio, onDrop }: FileUploadProps): ReactElement => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png'],
    },
  });

  return (
    <div {...getRootProps()} style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center' }} className="Container">
      <AspectRatio.Root ratio={ratio}>
        <input {...getInputProps()} />
        <button>Upload</button>
        <p>Drop Image Here or Click to Upload</p>
      </AspectRatio.Root>
    </div>
  );
};

export default FileUpload;
