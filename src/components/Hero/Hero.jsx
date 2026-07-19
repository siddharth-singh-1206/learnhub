import { Link } from 'react-router-dom';
import { FaLaptopCode } from 'react-icons/fa';
import '../../styles/home.css';

const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Learn Smarter with LearnHub</h1>
        <p className="hero-text">
          Upskill with industry-focused courses, expert mentors, live classes, and flexible learning schedules.
        </p>
        <Link to="/courses" className="hero-btn">
          Explore Courses
        </Link>
      </div>
      <div className="hero-visual">
        <FaLaptopCode className="hero-icon" />
      </div>
    </main>
  );
};

export default Hero;
