// components/ImageComparisonSlider.tsx
import React from 'react';
import { ImgComparisonSlider } from '@img-comparison-slider/react';

const ImageComparisonSlider: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '500px' }}>
    <ImgComparisonSlider>
      <img slot="first" src="https://img-comparison-slider.sneas.io/demo/images/before.webp" ></img>
      <img slot="second" src="https://img-comparison-slider.sneas.io/demo/images/after.webp" ></img>
      <div slot="first" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>TEST</div>
      <div slot="second" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>TEST</div>
    </ImgComparisonSlider>
    </div>
  );
};

export default ImageComparisonSlider;
