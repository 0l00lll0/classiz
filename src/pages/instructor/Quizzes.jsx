import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../css/general_content.css';
import { FaFilter } from 'react-icons/fa'; 
const Quizzes = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    // useEffect(() => {
    //     axios.get('http://localhost:3000/api/')
    //         .then(response => {
    //             setQuizzes(response.data);
    //         })
    //         .catch(error => {
    //             console.error('There was an error!', error);
    //         });
    // }, []);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <div id='quiz' className="container">
            <header className="header">
                <button className="button">Upcoming</button>
                <button className="button">Incomplete</button>
                <button className="button">Completed</button>

                <div className="dropdown">
                    <button className="button dropdown-button" onClick={toggleDropdown}>
                        <FaFilter className="filter-icon" />Filter By
                    </button>
                    {dropdownVisible && (
                        <div className="dropdown-menu">
                            <button className="dropdown-item">Public</button>
                            <button className="dropdown-item">Private</button>
                        </div>
                    )}
                </div>
            </header>

            <hr className="divider" />

            <div className="quiz-list">
                {quizzes.map((quiz, index) => (
                    <div key={index}>
                        <p className="date">{new Date(quiz.due_date).toLocaleDateString()}</p>
                        <div className="quiz-card">
                            <div className="quiz-wrapper">
                                <div className="details-wrapper">
                                    <h2 className="quiz-title">{quiz.quiz_title}</h2>
                                    <hr />
                                    <div className="date-wrapper">
                                        <img src="media/calendar.svg" alt="Calendar Icon" className="image icon" />
                                        <p className="due-date">Due Date: {new Date(quiz.due_date).toLocaleString()}</p>
                                    </div>
                                    <p className="course-code">Section: {quiz.section}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Quizzes;