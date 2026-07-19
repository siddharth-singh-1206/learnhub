const CourseCard = ({ title, instructor, duration, level, price }) => {
  return (
    <div className="course-card">
      <h3 className="course-card-title">{title}</h3>
      <p className="course-card-meta">By <strong>{instructor}</strong></p>
      <div className="course-card-details">
        <span>Duration: {duration}</span>
        <span>Level: {level}</span>
      </div>
      <div className="course-card-footer">
        <span className="course-card-price">{price}</span>
        <button type="button" className="course-card-btn">Enroll Now</button>
      </div>
    </div>
  );
};

export default CourseCard;
