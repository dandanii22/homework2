const GalleryItem = ({ item, setTest }) => {
  const { title, imgurl, desc } = item;

  const onClickImage = (imgurl, desc) => {
    setTest({
      fileUrl: imgurl,
      desc,
      title,
    });
  };

  return (
    <li>
      <img src={imgurl} onClick={() => onClickImage(imgurl, desc, title)}></img>
    </li>
  );
};

export default GalleryItem;
