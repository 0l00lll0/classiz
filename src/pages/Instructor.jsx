import React, { useState } from "react";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Instructor.css'; 
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
          <a href="#" className="nav-link active" onClick={() => setContent("Home")}>Home</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={() => setContent("Classes")}>Manage Classes</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={() => setContent("Create Class")}>Create Class</a>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link" onClick={() => setContent("Create Activity")}>Create Activity</a>
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
          <a href="#" className="nav-link" onClick={() => setContent("Quizzes")}>Manage Quizzes</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={() => setContent("Exams")}>Manage Exams</a>
        </li>

        {/* User Section */}
        <li className="nav-item">
          <h6 className="nav-header">User</h6>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={() => setContent("Logout")}>Logout</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={() => setContent("Help & Support")}>Help & Support</a>
        </li>
      </ul>

     <input 
      type="text" 
      placeholder="Search..." 
      className="form-control mb-3" 
      onChange={(e) => setContent(`Search Results for "${e.target.value}"`)} 
    />
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