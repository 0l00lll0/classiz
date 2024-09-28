import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../component/header';
import '../css/landingpage.css'; 
import homeImage from '../assets/home.webp'; 
import aboutImage from '../assets/search.webp'; 
import contactImage from '../assets/contact.webp'; 

import boyImage from '../assets/boy-dynamic-gradient.webp';
import folderImage from '../assets/folder-dynamic-gradient.webp';
import tickImage from '../assets/tick-dynamic-gradient.webp';
import Footer from '../component/footer';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <section id="home" className="container-fluid section">
        <div className="row h-100">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <a className="navbar-brand classiz" href="#home">
              class<span style={{ color: '#BA68C8' }}>iz.</span>
            </a>
            <p className="lead mt-3">Ever thought of creating your own world of quizzes? At classiz,<span> we turn your imagination to reality!</span></p>
            <div className="gradient-line my-3"></div>
            <p className='second-text'>Whether you’re an educator aiming to gauge your students’ progress, or just a trivia buff who loves challenging others, classiz is the place for you!</p>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center img">
            <img src={homeImage} alt="Home" className="img-fluid" />
          </div>
        </div>
      </section>


        <section id="about" className="container mt-5 about-section">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center justify-content-center img">
              <img src={aboutImage} alt="Home" className="img-fluid" />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <div className="gradient-line my-3"></div>
              <h1 className="navbar-brand about-start">Get started!</h1>
              <p className="lead mt-3">Want to experience the thrill of knowledge? Create engaging quizzes, gain insights, and embark on this knowledge journey with us? Dive right in!</p>
              <div className="d-flex mt-3">
                <a href="/register-instructor" className="btn btn-primary me-2">Register as Instructor</a>
                <a href="/register-student" className="btn btn-primary">Register as Student</a>
              </div>
            </div>
          </div>

        <div className="full-width">
          <div className="row">
            
            <div>
            <div className="gradient-classiz my-3"></div>

              <h1 className="why-classiz" href="#home">
                why class<span style={{ color: '#BA68C8' }}>iz</span>?
              </h1>
            </div>
            <div className="col-md-6">
              <div className="container-1">
                <p>At classiz, we believe in learning with fun. Our dynamic quiz framework not only feeds your curiosity but also helps you track your growth over time.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="container-2">
                <p>Our course creators handpick each question, making sure you tackle real-world problems and keep your grey cells active!</p>
              </div>
            </div>
          </div>

         <div className="full-width-container">
          <div className="c1">
            <div className="content-row">
              {/* <img src={tickImage} alt="Tick Dynamic Gradient" className="dynamic-image" /> */}
              <div className="text-content">
                <h1>Student Registered</h1>
                <p>10,000 Bright Minds</p>
                
              </div>
            </div>
          </div>
          <div className="c2">
            <div className="content-row">
              {/* <img src={folderImage} alt="Folder Dynamic Gradient" className="dynamic-image" /> */}
              <div className="text-content">
                <h1>Quizzes and Exams Done</h1>
                <p>10,000+ Questions Answered</p>
              </div>
            </div>
          </div>
          <div className="c3">
            <div className="content-row">
              {/* <img src={boyImage} alt="Boy Dynamic Gradient" className="dynamic-image" /> */}
              <div className="text-content">
                <h1>Instructor Onboard</h1>
                <p>500 Knowledge Gurus</p>
              </div>
            </div>
          </div>
        </div>
        </div>
        </section>


        <section id="contact" className="container mt-5 section">
          <div className="row h-100">
            <div className="col-md-6 right-contact">
            <div className="gradient-contact my-3"></div>

              <h1>Contact Us</h1>
              <p> Feel free to message us!</p>
              <form className="mt-4">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Your Email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>    
            </div>
            <div className="col-md-6 d-flex align-items-center img">
              <img src={contactImage} alt="Contact" className="img-fluid" />
            </div>
           
            <div className="social-icons mt-4">
              <a href="" target="_blank" rel="noopener noreferrer" className="me-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" className="me-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
         
        </section>

        {/* <Footer /> */}
    </div>
  );
}

export default LandingPage;