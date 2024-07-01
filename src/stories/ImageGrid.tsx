import { useState } from 'react';
import { css, cx } from '../../styled-system/css';
import { grid } from '../../styled-system/patterns';

export interface ImageGridProps {
  images: { src: string, alt: string }[];
  onImageClick: (src: string) => void;
  columns?: number; // optional prop for columns
}

const ImageGrid = ({ images, onImageClick, columns }: ImageGridProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    onImageClick(src);
  };

  const gridStyles = css({
    display: 'grid',
    gap: '10px',
    gridTemplateColumns: columns ? `repeat(${columns}, 1fr)` : 'repeat(auto-fit, minmax(100px, 1fr))',
  });

  // TODO use panda layout
  const itemStyles = css({
    cursor: 'pointer',
    transition: 'transform 0.2s',
    '&.selected': {
      transform: 'scale(1.1)',
      border: '2px solid #007bff',
    }
  });

  const imageStyles = css({
    width: '100%',
    height: 'auto',
    display: 'block',
  });

  return (
    // <div className={gridStyles}>
    <div className={grid({ gap: '6', columns: columns })}>
      {images.map((image, index) => (
        <div
          key={index}
          // className={`${itemStyles} ${selectedImage === image.src ? 'selected' : ''}`}
          // className={cx(itemStyles, { selected: selectedImage === image.src })}
          className={cx(itemStyles, selectedImage === image.src ? 'selected' : '')}
          onClick={() => handleImageClick(image.src)}
        >
          <img src={image.src} alt={image.alt} className={imageStyles} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
