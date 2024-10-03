import React from 'react';
import PropTypes from 'prop-types';
import personIcon from '../../media/person-icon.svg'; // Adjust the path as necessary
import '../../css/Classes.css'; // Ensure this file contains the CSS styles

const Classes = ({ classes, onCardClick }) => {
  return (
    <div>
      <h2>Class List</h2>
      <div className="grid">
        {classes.map((classItem, index) => (
          <div
            className="card"
            key={index}
            onClick={() => onCardClick(classItem)} // Add click event handler
          >
            <div className="card-content">
              <h3 className="card-title">{classItem.name}</h3>
              <hr />
              <p>{classItem.description}</p> {/* Use description instead of code */}
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
    </div>
  );
};

Classes.propTypes = {
  classes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired, // Ensure description is required
      enrollment: PropTypes.number.isRequired,
    })
  ).isRequired,
  onCardClick: PropTypes.func.isRequired, // Add PropTypes for the click handler
};

export default Classes;