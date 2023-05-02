import React from 'react';
import './home.css';
import authorImage from '../../assets/Author.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
  return (
    <section className='home section grid'>
      <img src={authorImage} alt="Home Image" className='home__img' />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Rofiyev Dilshod</span> Web Developer
          </h1>

          <p className="home__description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam accusantium fuga quasi impedit neque magni asperiores porro aperiam incidunt laudantium. Ipsum sunt quia impedit totam ab, debitis velit eveniet similique tenetur praesentium nihil necessitatibus?
          </p>
          <Link to={'/about'} className='button'>
            More About Me <span className='button__icon'>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block">
        
      </div>
    </section>
  )
}

export default Home;