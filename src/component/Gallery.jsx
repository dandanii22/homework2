import { useState } from "react";
import GalleryText from "./GalleryText";
import GalleryView from "./GalleryView";
import data from "../assets/api/img";
import "./style.scss";
import img1 from "../assets/images/bimg11.jpg";

const Gallery = () => {
  const [test, setTest] = useState({
    fileUrl: img1,
    desc: "고양이 사진1",
    title: "고양이1",
  });
  return (
    <div className="wrap">
      <GalleryView data={data} setTest={setTest} test={test} />
      <GalleryText title={test.title} desc={test.desc} />
    </div>
  );
};

export default Gallery;
