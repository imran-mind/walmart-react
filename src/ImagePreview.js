const ImagePreview = ({ thumbnailUrl }) => {
  return (
    <div className="img_previiew">
      <img src={thumbnailUrl} alt="img_preview" />
    </div>
  );
};

export default ImagePreview;
