import GalleryItem from "./GalleryItem";

const GalleryList = ({ data, setTest }) => {
  return (
    <ul className="imglist">
      {data.map((item) => (
        <GalleryItem key={item.id} item={item} setTest={setTest} />
      ))}
      \
    </ul>
  );
};

export default GalleryList;
