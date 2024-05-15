const GalleryBig = ({ test }) => {
  return (
    <div className="bigimg">
      <h2>{test.title}</h2>
      <img src={test.fileUrl}></img>
    </div>
  );
};

export default GalleryBig;
