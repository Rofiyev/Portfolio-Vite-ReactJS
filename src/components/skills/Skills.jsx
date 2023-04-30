import React from 'react';
import { skillsData } from '../../Data';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
  return (
    <>
      {skillsData.map(({ percentage, title, id }) => (
        <div key={id} className="progress__box">
          <div className="progress__circle">
            <CircularProgressbar
              strokeWidth={7.5}
              text={`${percentage}%`}
              value={percentage} />
          </div>

          <h3 className='skills__title'>{title}</h3>
        </div>
      ))}
    </>
  )
}

export default Skills