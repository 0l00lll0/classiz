import React, { useState } from "react";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Instructor.css'; 
import { Icon } from '@iconify/react';
import homeIcon from '@iconify/icons-heroicons/home-solid';
import classesIcon from '@iconify/icons-icomoon-free/books';
import createClassIcon from '@iconify/icons-ic/baseline-create-new-folder';
import createActivityIcon from '@iconify/icons-mdi/pencil-plus';
import quizzesIcon from '@iconify/icons-material-symbols/library-books';
import examsIcon from '@iconify/icons-healthicons/i-exam-multiple-choice';
import logoutIcon from '@iconify/icons-fluent/person-12-filled';
import helpIcon from '@iconify/icons-fluent/settings-24-filled';
import searchIcon from '@iconify/icons-material-symbols/search';

// Sidebar Component
const Sidebar = ({ setContent }) => {
  const [isLinkedToClass, setIsLinkedToClass] = useState(false);

  return (
    <div id="sidebar" className="d-flex flex-column flex-shrink-0 p-3 bg-light sidebar">
      <p className="navbar-brand classiz">
        class<span style={{ color: '#BA68C8' }}>iz.</span>
      </p>
      
      <ul className="nav nav-pills flex-column mb-auto">
        {/* Menu */}
        <li className="nav-item">
          <h6 className="nav-header">Menu</h6>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link active" onClick={() => setContent("Home")}>
            <Icon icon={homeIcon} /> Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={() => setContent("Classes")}>
            <Icon icon={classesIcon} /> Manage Classes
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={() => setContent("Create Class")}>
            <Icon icon={createClassIcon} /> Create Class
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={() => setContent("Create Activity")}>
            <Icon icon={createActivityIcon} /> Create Activity
          </a>
        </li>
        <li className="nav-item">
          <div className="form-check form-switch">
            <input
              type="checkbox"
              className="form-check-input"
              id="linkToClass"
              checked={isLinkedToClass}
              onChange={() => setIsLinkedToClass(!isLinkedToClass)}
            />
            <label className="form-check-label" htmlFor="linkToClass">
              {isLinkedToClass ? "Linked to a class" : "Not linked to a class"}
            </label>
          </div>
        </li>
        {/* Assessment Section */}
        <li className="nav-item">
          <h6 className="nav-header">Assessment</h6>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={() => setContent("Quizzes")}>
            <Icon icon={quizzesIcon} /> Manage Quizzes
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={() => setContent("Exams")}>
            <Icon icon={examsIcon} /> Manage Exams
          </a>
        </li>
        {/* User Section */}
        <li className="nav-item">
          <h6 className="nav-header">User</h6>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={() => setContent("Logout")}>
            <Icon icon={logoutIcon} /> Logout
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={() => setContent("Help & Support")}>
            <Icon icon={helpIcon} /> Help & Support
          </a>
        </li>
      </ul>

      <div className="input-group mb-3">
        <input 
          type="text" 
          placeholder="   Search" 
          className="form-control" 
          onChange={(e) => setContent(`Search Results for "${e.target.value}"`)} 
        />
        <span className="input-group-text">
          <Icon icon={searchIcon} />
        </span>
      </div>
    </div>
  );
};

// PropTypes for Sidebar
Sidebar.propTypes = {
  setContent: PropTypes.func.isRequired,
};

// Content Component
const Content = ({ content }) => {
  return <div className="content p-3">{content}</div>;
};

// PropTypes for Content
Content.propTypes = {
  content: PropTypes.string.isRequired,
};

// Main App Component
const App = () => {
  const [content, setContent] = useState("Home");

  return (
    <div className="d-flex">
      <Sidebar setContent={setContent} />
      <Content content={content} />
    </div>
  );
};

export default App;