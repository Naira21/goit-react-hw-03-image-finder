import "./styles.css";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ pictUrl, photographer, onClick }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={pictUrl}
        alt={photographer}
        className="ImageGalleryItem-image"
        onClick={onClick}
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  pictUrl: PropTypes.string,
  photographer: PropTypes.string,
  onClick: PropTypes.func,
};
