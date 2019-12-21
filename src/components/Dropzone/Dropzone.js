import React, { useMemo, useCallback } from "react";
import { useDropzone } from "react-dropzone";

const activeStyle = {
  borderColor: "#a58bff"
};

const acceptStyle = {
  borderColor: "#00e676"
};

export default function Dropzone(props) {
  const { onUpload } = props;

  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles[0]);
  });

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    onDropAccepted,
    isDragActive,
    isDragAccept
  } = useDropzone({ accept: "image/*", onDropAccepted: onUpload });

  // const imagePreview = URL.createObjectURL(acceptedFiles[0].path);

  console.log(acceptedFiles[0]);

  const files = acceptedFiles.map(file => (
    <p key={file.path}>
      {file.path} - {file.size} bytes
    </p>
  ));

  console.log(acceptedFiles[0]);

  const style = useMemo(
    () => ({
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {})
    }),
    [isDragAccept, isDragActive]
  );

  return (
    <div
      className="App-Form__inputGroup"
      style={{ backgroundImage: `url(${props.preview})` }}
    >
      <div {...getRootProps({ className: "App-Form__dropzone", style })}>
        <input {...getInputProps()} />
        {!files.length ? <p>Drop contact photo here</p> : files}
      </div>
    </div>
  );
}
