import React, { useState, useRef, useCallback, useEffect } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const ImageCropper = ({ imageURL }) => {
  const [userImage, setUserImage] = useState(imageURL);
  const hiddenFileInput = useRef(null);
  const [crop, setCrop] = useState({
    unit: "%",
    disabled: false,
    locked: false,
    aspect: 16 / 9,
    width: 50,
    minWidth: 30,
  });

  const handleClick = (e) => {
    e.preventDefault();
    hiddenFileInput.current.click();
  };

  const handleInputChange = (event) => {
    const { files } = event.target;
    setUserImage(URL.createObjectURL(files[0]));
  };

  //Funcion para obtener la imagen cortada. ME DA ERROR

  //   function getCroppedImg() {
  //     const canvas = document.createElement("canvas");

  //     const scaleX = image.naturalWidth / image.width;
  //     const scaleY = image.naturalHeight / image.height;

  //     canvas.width = crop.width;
  //     canvas.height = crop.height;
  //     const ctx = canvas.getContext("2d");

  //     ctx.drawImage(
  //       image,
  //       crop.x * scaleX,
  //       crop.y * scaleY,
  //       crop.width * scaleX,
  //       crop.height * scaleY,
  //       0,
  //       0,
  //       crop.width,
  //       crop.height
  //     );
  //     const base64Image = canvas.toDataURL("image/jpeg");
  //     setUserImage(base64Image);
  //   }

  const cropOnChange = (e) => {
    console.log("crop", e);
    setCrop(e);
  };

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
          onChange={(e) => cropOnChange(e)}
          crop={crop}
        />
        <a onClick={getCroppedImg}>Crop</a>
      </div>
    </>
  );
};

export default ImageCropper;
