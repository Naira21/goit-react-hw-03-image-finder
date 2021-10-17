import "./styles.css";

const ImageGalleryItem = ({ picture }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={picture.webformatURL}
        alt={picture.user}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};
export default ImageGalleryItem;
