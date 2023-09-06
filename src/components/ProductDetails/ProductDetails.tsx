import { useState } from 'react';
import ProductDetailsProps from '../../model/components/ProductDetails/ProductDetails';
import './product-details.scss';
import IconArrow from '../IconArrow/IconArrow';

const ProductDetails = ({ item, onClose, productDetailsRef }: ProductDetailsProps): JSX.Element => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const nextPhoto = (): void => {
    if (item.variants[0].images) {
      if (currentPhotoIndex < item.variants[0].images.length - 1) {
        setCurrentPhotoIndex(currentPhotoIndex + 1);
      } else {
        setCurrentPhotoIndex(0);
      }
    }
  };

  const prevPhoto = (): void => {
    if (item.variants[0].images) {
      if (currentPhotoIndex > 0) {
        setCurrentPhotoIndex(currentPhotoIndex - 1);
      } else {
        setCurrentPhotoIndex(item.variants[0].images.length - 1);
      }
    }
  };

  const handleThumbnailClick = (index: number): void => {
    setCurrentPhotoIndex(index);
  };

  return (
    <>
      <div ref={productDetailsRef} className="product-details" key={item.key}>
        <button className="product-details__btn btn" onClick={onClose}>
          <span className="cross">x</span>
        </button>
        <div className="product-details__content">
          <div className="product-details__content_left">
            <div className="product-details__photo">
              {item.variants[0].images && (
                <img
                  src={item.variants[0].images[currentPhotoIndex].url}
                  className="product-details__photo_main"
                  alt={`Photo ${`${item.key}` + 1}`}
                />
              )}
            </div>
            <div className="product-details__photos">
              <div className="product-details__arrow arrow-left" onClick={prevPhoto}>
                <IconArrow />
              </div>
              <div className="product-details__photo-cards">
                {item.variants[0].images?.map((image, index) => (
                  <div
                    key={index}
                    className={`product-details__photo-card ${
                      index === currentPhotoIndex ? 'active' : ''
                    }`}
                    onClick={(): void => handleThumbnailClick(index)}
                  >
                    <img
                      src={image.url}
                      className="product-details__photo-card_mini"
                      alt={`Photo ${`${item.key}` + 1}`}
                    />
                  </div>
                ))}
              </div>
              <div className="product-details__arrow arrow-right" onClick={nextPhoto}>
                <IconArrow />
              </div>
            </div>
          </div>
          <div className="product-details__content_right">
            <h2 className="product-details__title">{item.name['en-US']}</h2>
            <h3 className="product-details__description">
              {item.description ? item.description['en-US'] : ''}
            </h3>
            <div>
              {item.masterVariant.prices ? item.masterVariant.prices[0].value.centAmount / 2 : ''}{' '}
              {item.masterVariant.prices ? item.masterVariant.prices[0].value.currencyCode : ''}
            </div>
            <div className="product-details__btn-wrapper">
              <button className="product-details__btn-wrapper_btn minus-btn btn">-</button>
              <div className="product-details__btn-wrapper_count">0</div>
              <button className="product-details__btn-wrapper_btn plus-btn btn">+</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
