const ThumbnailCard = (props) => {
  return (
    <>
      <img data-id={props.data.id} src={props.data.thumbnailUrl} alt="thumbnail" />
    </>
  );
};

export default ThumbnailCard;
