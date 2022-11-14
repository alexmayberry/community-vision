import { openUploadWidget } from "../utils/CloudinaryService";


const ImageUpload = (props) => {
  const uploadImageWidget = () => {
    console.log(props);
    let myUploadWidget = openUploadWidget(
      {
        cloudName: "dkrgydudr",
        uploadPreset: "nmqlk7x4",
        tags: ["myname"],
        maxImageWidth: 1000,
        sources: ["local", "url", "camera"]
      },
      function (error, result) {
        if (!error && result.event === "success") {
          props.onImageUpload(result.info.public_id, result.info.url);
        }
      }
    );
    myUploadWidget.open();
  };

  return (
    <button type="button" onClick={uploadImageWidget}>
      Upload Image
    </button>
  );
};

export default ImageUpload;
