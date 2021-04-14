import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';

const ImageGallery = ({ images, toggleModal }) => {
  const checkEvent = evt => {
    if (evt.target !== evt.currentTarget) {
      toggleModal({
        status: true,
        src: evt.target.dataset.imageurl,
        alt: evt.target.alt,
      });
    }
  };

  return (
    <ul className={s.ImageGallery} onClick={checkEvent}>
      {images.map(image => (
        <ImageGalleryItem image={image} key={image.id} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default ImageGallery;
