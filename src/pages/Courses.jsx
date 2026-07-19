import CourseCard from '../components/CourseCard/CourseCard';
import PricingCard from '../components/PricingCard/PricingCard';
import { courses } from '../data/courses';
import { pricingPlans } from '../data/pricing';
import '../styles/courses.css';

const Courses = () => {
  return (
    <main className="courses-page">
      <section className="courses-section">
        <h1 className="courses-heading">Our Courses</h1>
        <div className="courses-grid">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              instructor={course.instructor}
              duration={course.duration}
              level={course.level}
              price={course.price}
            />
          ))}
        </div>
      </section>
      <section className="pricing-section">
        <h2 className="pricing-heading">Pricing Plans</h2>
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              name={plan.name}
              price={plan.price}
              features={plan.features}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Courses;
