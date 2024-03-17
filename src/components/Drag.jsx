import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";

export default function Accept({ setFormData, formData }) {
  //1. El primero es para guardar el archivo, el segundo para indicar el status
  const [uploadStatus, setUploadStatus] = useState(
    "Arroja o sube una imagen (PNG o JPG)."
  );
  //Este elemento es inncesario para la implementación

  //2. Este element cachea el archivo
  const onDrop = useCallback(async (acceptedFiles) => {
    if (acceptedFiles.length > 1) {
      setUploadStatus("Only one image can be uploaded at a time.");
      return;
    }
    const file = acceptedFiles[0];
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      setUploadStatus("Only image files (JPEG and PNG) are allowed.");
      return;
    }
    setFormData({ ...formData, image: file });
    setUploadStatus(`- ${file.name}`);
    console.log(formData);
  }, []);
  //3. La lógica de la librería, en accept se ve los tipos de archivo
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    onDrop,
  });
  //4. La función para subir el archivo

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>{uploadStatus}</p>
      </div>
    </section>
  );
}
