import React from 'react';
import '../../css/Home.css';
import programmingImage from '../../media/programming.svg';
import frenchLitImage from '../../media/FrenchLit.svg';
import historyImage from '../../media/History.svg';
import chemistryImage from '../../media/Chemistry.svg';
import dsaImage from '../../media/DSA.svg';
import personIcon from '../../media/person-icon.svg';

const Home = () => {
  return (
    <div className="container">
      <main className="main-content">
        <div className="main-card">
          <h2 className="welcome-title">
            Welcome to class<span className="colored">iz</span>, <br /> Nikki!
          </h2>
        </div>

        <div className="grid">
          {courses.map((course, index) => (
            <div className="card" key={index}>
              <div className="card-image-container">
                <img
                  src={course.image}
                  alt="Course Image"
                  className="card-image"
                />
              </div>
              <div className="card-content">
                <h3 className="card-title">{course.title}</h3>
                <hr />
                <p>{course.code}</p>
                <p className="card-text">
                  <img
                    src={personIcon}
                    alt="Students Icon"
                    className="icon-image"
                  />
                  {course.enrollment} Students Enrolled
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

const courses = [
  {
    title: 'Programming',
    code: 'BSCS2002',
    enrollment: 20,
    image: programmingImage,
  },
  {
    title: 'French Literature',
    code: 'BSLIT210',
    enrollment: 20,
    image: frenchLitImage,
  },
  {
    title: 'History',
    code: 'BSH2761',
    enrollment: 20,
    image: historyImage,
  },
  {
    title: 'Chemistry',
    code: 'BSCH2002',
    enrollment: 20,
    image: chemistryImage,
  },
  {
    title: 'Data Structures',
    code: 'BSCS2002',
    enrollment: 20,
    image: dsaImage,
  },
];

export default Home;