const TestimonialCard = ({ name, course, review }) => {
  return (
    <div className="testimonial-card">
      <p className="testimonial-card-review">"{review}"</p>
      <div className="testimonial-card-meta">
        <h4 className="testimonial-card-name">{name}</h4>
        <span className="testimonial-card-course">{course}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
