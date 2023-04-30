import React from 'react';
import { statistics } from '../../Data';
import parse from 'html-react-parser';

const Stats = () => {
  return (
    <>
      {statistics.map(({ id, title, no }) => (
        <div className='stats__box' key={id}>
          <h3 className='stats__no'>{no}</h3>
          <p className='stats__title'>{parse(title)}</p>
        </div>
      ))}
    </>
  )
}

export default Stats