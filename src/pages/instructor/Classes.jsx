// src/pages/instructor/Classes.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Classes = ({ classes }) => {
  return (
    <div>
      <h2>Class List</h2>
      <ul>
        {classes.map((classItem, index) => (
          <li key={index}>{classItem}</li>
        ))}
      </ul>
    </div>
  );
};

Classes.propTypes = {
  classes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Classes;