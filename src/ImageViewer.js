import React, { useEffect } from "react";
import ImagePreview from "./ImagePreview";
import ThumbnailCard from "./ThumbnailCard";

const ImageViewer = () => {
  const [thumbnails, setThumbnails] = React.useState([]);
  const [selectedThumbnail, setSelectedThumbnail] = React.useState(null);

  useEffect(() => {
    const fetchThumbnails = async () => {
      const url = "https://jsonplaceholder.typicode.com/photos";
      const response = await fetch(url);
      const result = await response.json();
      setThumbnails(result.slice(0, 10));
      if (result.slice(0, 1).length) {
        setSelectedThumbnail(result.slice(0, 1)[0]);
      }
    };
    fetchThumbnails();
  }, []);

  const handleThumbnailClick = (e) => {
    const id = parseInt(e.target.getAttribute("data-id"));
    const foundThumbnail = thumbnails.find((item) => item.id === id);
    setSelectedThumbnail(foundThumbnail);
  };

  console.log("thumbnails ", selectedThumbnail);
  return (
    <div className="container">
      {thumbnails.length ? (
        <div>
          <ImagePreview thumbnailUrl={selectedThumbnail.thumbnailUrl} />
          <div className="img_thumbnails" onClick={handleThumbnailClick}>
            {thumbnails.map((data) => {
              return <ThumbnailCard key={data.id} data={data} />;
            })}
          </div>
        </div>
      ) : (
        <div>No Data Found</div>
      )}
    </div>
  );
};

export default ImageViewer;
