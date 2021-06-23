import React, { useState, useRef, useCallback, useEffect } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop";

const ImageCropper = ({ imageURL }) => {
  const [userImage, setUserImage] = useState(imageURL);
  const hiddenFileInput = useRef(null);

  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ aspect: 1 / 1 });
  const [result, setResult] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    hiddenFileInput.current.click();
  };

  const handleInputChange = (event) => {
    const { files } = event.target;
    setUserImage(URL.createObjectURL(files[0]));
  };

  function getCroppedImg(image, crop) {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    const base64Image = canvas.toDataURL("image/jpeg");
    setResult(base64Image);
  }

  return (
    <>
      <img
        alt="User Profile"
        src={userImage}
        className="display-block ui centered medium circular image"
        onClick={(e) => handleClick(e)}
      />
      <input
        type="file"
        name="image"
        className="display-none"
        ref={hiddenFileInput}
        onChange={handleInputChange}
      />

      <div>
        <ReactCrop
          src={userImage}
          onImageLoaded={setImage}
          crop={crop}
          onChange={setCrop}
        />
        <a onClick={getCroppedImg}>Crop Image</a>
        <img src={result} alt="Crop" />
      </div>
    </>
  );
};

export default ImageCropper;
