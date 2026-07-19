import CourseCard from '../components/CourseCard/CourseCard';
import PricingCard from '../components/PricingCard/PricingCard';
import TestimonialCard from '../components/TestimonialCard/TestimonialCard';
import FAQ from '../components/FAQ/FAQ';
import { courses } from '../data/courses';
import { pricingPlans } from '../data/pricing';
import { testimonials } from '../data/testimonials';
import { faqs } from '../data/faq';
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
      <section className="testimonials-section">
        <h2 className="testimonials-heading">What Our Students Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              course={testimonial.course}
              review={testimonial.review}
            />
          ))}
        </div>
      </section>
      <section className="faq-section">
        <h2 className="faq-heading">Frequently Asked Questions</h2>
        <FAQ faqs={faqs} />
      </section>
    </main>
  );
};

export default Courses;
