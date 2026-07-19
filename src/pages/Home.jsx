import Hero from '../components/Hero/Hero';
import FeatureCard from '../components/FeatureCard/FeatureCard';
import { features } from '../data/features';

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
    </div>
  );
};

export default Home;
