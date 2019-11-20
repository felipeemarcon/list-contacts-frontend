import React, { Fragment, useMemo } from "react";
import { useDropzone } from "react-dropzone";

const activeStyle = {
  borderColor: "#a58bff"
};

const acceptStyle = {
  borderColor: "#00e676"
};

export default function Dropzone(props) {
  const { onUpload } = props;

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    onDropAccepted,
    isDragActive,
    isDragAccept
  } = useDropzone({ accept: "image/*", onDropAccepted: onUpload });

  const files = acceptedFiles.map(file => (
    <p key={file.path}>
      {file.path} - {file.size} bytes
    </p>
  ));

  const style = useMemo(
    () => ({
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {})
    }),
    [isDragAccept, isDragActive]
  );

  return (
    <div className="App-Form__inputGroup">
      <div {...getRootProps({ className: "App-Form__dropzone", style })}>
        <input {...getInputProps()} />
        {!files.length ? <p>Drop contact photo here</p> : files}
      </div>
    </div>
  );
}
