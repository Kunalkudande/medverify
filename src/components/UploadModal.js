import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

function UploadModal({ isOpen, onClose, onUpload }) {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      onUpload(acceptedFiles[0]);
    }
  }, [onUpload]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-2xl mb-4">Upload Image</h2>
        <div {...getRootProps()} className="border-2 border-dashed border-gray-300 p-8 text-center cursor-pointer">
          <input {...getInputProps()} />
          <p>Drop files here or click to select files</p>
        </div>
        <button onClick={onClose} className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
          Close
        </button>
      </div>
    </div>
  );
}

export default UploadModal;