import Hero from '../components/Hero/Hero';
import FeatureCard from '../components/FeatureCard/FeatureCard';
import { features } from '../data/features';

const benefits = [
  {
    id: 1,
    title: 'Learn Anytime',
    description: 'Access courses whenever you want.'
  },
  {
    id: 2,
    title: 'Career Growth',
    description: 'Gain practical skills for real-world opportunities.'
  },
  {
    id: 3,
    title: 'Affordable Learning',
    description: 'Choose plans that suit every learner.'
  }
];

const Home = () => {
  return (
    <div>
      <Hero />
      <section className="features-section">
        <h2 className="features-heading">Why Choose LearnHub?</h2>
        <div className="features-grid">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </section>
      <section className="benefits-section">
        <h2 className="benefits-heading">Learning Made Simple</h2>
        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="benefit-card">
              <h3 className="benefit-card-title">{benefit.title}</h3>
              <p className="benefit-card-desc">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
