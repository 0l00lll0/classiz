import React from 'react';
import PropTypes from 'prop-types';
import personIcon from '../../media/person-icon.svg';
import '../../css/Classes.css';

const Classes = ({ classes = [], onCardClick }) => {
  return (
    <div id='classes' className="container">
      <main className="main-content">
        <div className="grid">
          {classes.map((classItem, index) => (
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
      </main>
    </div>
  );
};

Classes.propTypes = {
  classes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      enrollment: PropTypes.number.isRequired,
    })
  ).isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default Classes;