import React from 'react';
import { authorInfo } from '../../Data';

const Info = () => {
  return (
    <>
      {authorInfo.map(({ title, description, id }) => (
        <li key={id} className="info__item">
          <span className='info__title'>{title}</span>
          <span className='info__description'>{description}</span>
        </li>
      ))}
    </>
  )
}

export default Info;