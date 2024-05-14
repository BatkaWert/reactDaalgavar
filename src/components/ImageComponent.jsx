import React from 'react';

const ImageComponent = ({ src, alt }) => {
  return (
    <div style={{ background: '#CCCCCC', padding: '1rem' }}>
      <img src={src} alt={alt} style={{width: '100px', height: '100px'}} />
    </div>
  );
};

export default ImageComponent;