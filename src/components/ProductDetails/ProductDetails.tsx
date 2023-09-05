import { useState } from 'react';
import ProductDetailsProps from '../../model/components/ProductDetails/ProductDetails';
import './product-details.scss';

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
          <div className="product-details__photo">
            {item.variants[0].images && (
              <img
                src={item.variants[0].images[currentPhotoIndex].url}
                alt={`Photo ${currentPhotoIndex + 1}`}
              />
            )}
          </div>
          <div className="product-details__photos">
            <div className="product-details__arrow arroe-left" onClick={prevPhoto}>
              left
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
                  <img src={image.url} alt={`Photo ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className="product-details__arrow arroe-right" onClick={nextPhoto}>
              right
            </div>
          </div>
          <div>
            <h2 className="product-details__title">{item.name['en-US']}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
