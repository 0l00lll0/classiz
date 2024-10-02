// src/pages/instructor/Classes.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Classes = ({ classes }) => {
  return (
    <div>
      <h2>Class List</h2>
      <ul>
        {classes.map((classItem, index) => (
          <li key={index}>
            {typeof classItem === 'object' ? (
              <div>
                <h3>{classItem.name}</h3>
                <p>{classItem.description}</p>
                <p>Type: {classItem.type}</p>
              </div>
            ) : (
              classItem
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

Classes.propTypes = {
  classes: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      }),
    ])
  ).isRequired,
};

export default Classes;