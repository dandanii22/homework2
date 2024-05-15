import GalleryBig from "./GalleryBig";
import GalleryList from "./GalleryList";

const GalleryView = ({ data, test, setTest }) => {
  return (
    <div>
      <GalleryBig data={data} test={test} />
      <GalleryList data={data} setTest={setTest} />
    </div>
  );
};

export default GalleryView;
