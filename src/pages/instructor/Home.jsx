import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import personIcon from '../../media/person-icon.svg';
import '../../css/Home.css';

const Home = ({ classes = [], onCardClick }) => {
  const [visibleCount, setVisibleCount] = useState(4);
  const navigate = useNavigate();

  const handleSeeMore = (e) => {
    e.preventDefault();
    navigate('/classes');
  };

  return (
    <div id='home' className="container">
      <main className="main-content">
        <div className="main-card">
          <h2 className="welcome-title">
            Welcome to class<span className="colored">iz</span>, <br /> <span className='name'>Nikki!</span> 
          </h2>
        </div>

        <div className="grid">
          {classes.slice(0, visibleCount).map((classItem, index) => (
            <div
              className="card"
              key={index}
              onClick={() => onCardClick(classItem)}
            >
              <div className="card-content">
                <h3 className="card-title">{classItem.name}</h3>
                <hr />
                <p>{classItem.description}</p>
                <p className="card-text">
                  <img
                    src={personIcon}
                    alt="Students Icon"
                    className="icon-image"
                  />
                  {classItem.enrollment} Students Enrolled
                </p>
              </div>
            </div>
          ))}
        </div>
        {visibleCount < classes.length && (
          <button className="see-more-btn" onClick={handleSeeMore}>
            See more
          </button>
        )}
      </main>
    </div>
  );
};

Home.propTypes = {
  classes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      enrollment: PropTypes.number.isRequired,
    })
  ).isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default Home;