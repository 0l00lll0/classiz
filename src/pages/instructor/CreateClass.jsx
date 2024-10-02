import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../css/CreateClass.css';

const CreateClass = ({ addClass }) => {
  const [className, setClassName] = useState('');
  const [classDescription, setClassDescription] = useState('');
  const [classType, setClassType] = useState('private');

  const handleAddClass = () => {
    if (className.trim() !== '' && classDescription.trim() !== '') {
      const newClass = {
        name: className,
        description: classDescription,
        type: classType,
      };
      addClass(newClass);
      setClassName('');
      setClassDescription('');
      setClassType('private');
    }
  };

  return (
    <div id='create-class'>
      <h1>Fill up the form to create a class.</h1>
      <div className="create-class-container">
        <div className="form-group">
          <label htmlFor="className">Classname</label>
          <input
            type="text"
            id="className"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            placeholder="Enter class name"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="classDescription">Let people know what this class is all about</label>
          <textarea
            id="classDescription"
            value={classDescription}
            onChange={(e) => setClassDescription(e.target.value)}
            placeholder="Enter class description"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>What kind of class will this be</label>
          <div className="btn-group">
            <button
              type="button"
              className={`btn ${classType === 'public' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setClassType('public')}
            >
              Public
            </button>
            <button
              type="button"
              className={`btn ${classType === 'private' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setClassType('private')}
            >
              Private
            </button>
          </div>
        </div>
        <button onClick={handleAddClass} className="btn btn-primary">Add Class</button>
      </div>
    </div>
  );
};

CreateClass.propTypes = {
  addClass: PropTypes.func.isRequired,
};

export default CreateClass;