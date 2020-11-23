import React from 'react';

function LikeButton({ count }) {
  return (
    <span className='like-button'>
      <i className='fa fa-heart' />
      <span className='like-count'>{count ? count : null}</span>
    </span>
  );
}

export default LikeButton;
