import React from 'react';
import ImageComponent from './ImageComponent';

const Article = () => {
  return (
    <article style={{ background: '#FF9999', padding: '1rem', display: 'flex', gap: '15rem' }}>
      <ImageComponent src='/src/assets/image1.jpg' alt='Image 1' />
      <ImageComponent src='/src/assets/image2.jpg' alt='Image 2' />
      <ImageComponent src='/src/assets/image3.jpg' alt='Image 3' />
    </article>
  );
};

export default Article;