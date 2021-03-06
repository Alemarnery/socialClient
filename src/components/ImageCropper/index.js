import React, { useState, useRef, forwardRef } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const ImageCropper = forwardRef(
  (
    {
      imageUrl,
      onImageChange,
      onImageCropped,
      onChange: onInputChange,
      ...inputRegister
    },
    ref
  ) => {
    const imageRef = useRef(null);
    const inputRef = useRef(ref);
    const [isCropping, setIsCropping] = useState(false);
    const [imageSrc, setImageSrc] = useState(null);
    const [croppedImageUrl, setCroppedImageUrl] = useState(null);
    const [crop, setCrop] = useState({
      unit: "px",
      x: 0,
      y: 0,
      width: 100,
      height: 100,
    });

    /*
     * Preview Image Methods
     */
    const onImageClick = (e) => {
      e.preventDefault();
      inputRef.current.click();
    };

    /*
     * Input Methods
     */
    const onSelectFile = (e) => {
      if (e.target.files && e.target.files.length > 0) {
        const reader = new FileReader();
        reader.addEventListener("load", () => setImageSrc(reader.result));
        reader.readAsDataURL(e.target.files[0]);
        onImageChange();
        setIsCropping(true);
      }
    };

    /*
     * ReactCrop Methods
     */
    const onImageLoaded = (image) => {
      // console.log("onImageLoaded:", image);
      imageRef.current = image;
    };
    const onCropComplete = (crop) => {
      // console.log("onCropComplete:", crop);
      makeClientCrop(crop);
    };
    const onCropChange = (crop) => {
      // console.log("onCropChange:", crop);
      setCrop(crop);
    };

    /*
     * Util Methods
     */
    const makeClientCrop = async (crop) => {
      if (imageRef && imageRef.current && crop.width && crop.height) {
        const croppedImageUrl = await getCroppedImg(
          imageRef.current,
          crop,
          "newFile.jpeg"
        );
        setCroppedImageUrl(croppedImageUrl);
      }
    };
    const getCroppedImg = (image, crop, fileName) => {
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

      // As Base64 string
      const base64Image = canvas.toDataURL("image/jpeg");
      return base64Image;
    };

    return (
      <>
        <div>
          {!isCropping && (
            <img
              alt="User Profile"
              style={{ maxWidth: "100%" }}
              src={croppedImageUrl || imageUrl}
              className="display-block ui centered medium circular image"
              onClick={onImageClick}
            />
          )}
          <input
            type="file"
            ref={inputRef}
            className="display-none"
            accept="image/*"
            onChange={(data) => {
              onInputChange(data);
              onSelectFile(data);
            }}
            {...inputRegister}
          />
        </div>
        {isCropping && imageSrc && (
          <>
            <ReactCrop
              src={imageSrc}
              crop={crop}
              circularCrop
              onImageLoaded={onImageLoaded}
              onComplete={onCropComplete}
              onChange={onCropChange}
            />
            <a
              onClick={() => {
                setIsCropping(false);
                onImageCropped(croppedImageUrl);
              }}
            >
              Crop Image!
            </a>
          </>
        )}
      </>
    );
  }
);

export default ImageCropper;
