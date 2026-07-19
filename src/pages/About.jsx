import TeamCard from '../components/TeamCard/TeamCard';
import { teamMembers } from '../data/team';
import '../styles/about.css';

const milestones = [
  {
    id: 1,
    year: '2023',
    title: 'LearnHub Founded',
    desc: 'Launched with a mission to make education accessible and practical.'
  },
  {
    id: 2,
    year: '2024',
    title: '10K Students Reached',
    desc: 'Expanded our student body globally, creating a vibrant learning community.'
  },
  {
    id: 3,
    year: '2025',
    title: 'Enterprise Partnerships',
    desc: 'Partnered with leading companies to offer job placements and internships.'
  },
  {
    id: 4,
    year: '2026',
    title: 'Global Expansion',
    desc: 'Introduced local mentor centers and translated curriculum offerings.'
  }
];

const About = () => {
  return (
    <main className="about-page">
      <section className="about-intro">
        <h1 className="about-heading">About LearnHub</h1>
        <div className="mission-vision-grid">
          <div className="about-box">
            <h2 className="about-section-title">Our Mission</h2>
            <p className="about-box-text">
              To empower learners globally by providing high-quality, flexible, and career-oriented online courses.
            </p>
          </div>
          <div className="about-box">
            <h2 className="about-section-title">Our Vision</h2>
            <p className="about-box-text">
              To build the worlds most accessible upskilling ecosystem, bridging the gap between student aspirations and industry needs.
            </p>
          </div>
        </div>
      </section>

      <section className="about-team">
        <h2 className="about-section-title centered">Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              role={member.role}
              avatar={member.avatar}
            />
          ))}
        </div>
      </section>

      <section className="about-timeline">
        <h2 className="about-section-title centered">Our Journey</h2>
        <div className="timeline-container">
          {milestones.map((milestone) => (
            <div key={milestone.id} className="timeline-item">
              <div className="timeline-badge">{milestone.year}</div>
              <div className="timeline-content">
                <h3 className="timeline-title">{milestone.title}</h3>
                <p className="timeline-desc">{milestone.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
