import React from 'react';

function Avatar({ hash }) {
  const url = `https://www.gravatar.com/avatar/a7f034143d45d581038f6097aaa8bd8f`;
  // const url = `https://www.gravatar.com/avatar/${hash}`;
  return <img src={url} className='avatar' alt='avatar' />;
}

export default Avatar;
