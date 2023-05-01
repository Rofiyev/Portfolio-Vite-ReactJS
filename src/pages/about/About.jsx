import React from 'react';
import { Info, Stats, Skills } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import CV from '../../assets/resume.pdf';
import './about.css'

const About = () => {
  return (
    <main className='section container'>
      <section className='about'>
        <h2 className="section__title">
          About <span>Me</span>
        </h2>

        <div className="about__container grid">
          <div className="about__info">
            <h3 className='section__subtitle'>Personal Infos</h3>

            <ul className="info__list grid">
              <Info />
            </ul>

            <a href={CV} download='' className='button'>
              Download CV <span className='button__icon'>
                <FontAwesomeIcon icon={faDownload} />
              </span>
            </a>
          </div>

          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>

      <div className="seperator"></div>

      <div className="skills">
        <h3 className="subtitle__center section__subtitle">
          My Skills
        </h3>

        <div className="skills__container grid">
          <Skills />
        </div>
      </div>
    </main>
  )
}

export default About;