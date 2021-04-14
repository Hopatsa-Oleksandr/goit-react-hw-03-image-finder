import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image }) => (
  <li className={s.ImageGalleryItem}>
    <img
      src={image.webformatURL}
      alt={image.tags}
      data-imageurl={image.largeImageURL}
      className={s.image}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
};

export default ImageGalleryItem;
